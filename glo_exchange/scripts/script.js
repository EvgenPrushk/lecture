document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const     customer = document.getElementById('customer'),
    freelancer = document.getElementById('freelancer'),
    blockCustomer = document.getElementById('block-customer'),
    blockFreelancer = document.getElementById('block-freelancer'),
    blockChoice = document.getElementById('block-choice'),
    btnExit = document.getElementById('btn-exit'),
    formCustomer = document.getElementById('form-customer'),
    ordersTable = document.getElementById('orders'),
    ordersTableFooter = document.getElementById('footTable'),
    modalOrder = document.getElementById('order_read'),
    modalOrderActive = document.getElementById('order_active');
    headTable = document.getElementById('headTable');

    const orders =JSON.parse(localStorage.getItem('freeOrders')) || [];

    const toStorage = () => {
        localStorage.setItem('freeOrders', JSON.stringify(orders));
    };

    const dayWord = (day, words) => {
        return words[day%10==1 && day%100!=11 ? 0 : day%10>=2 && day%10<=4 && (day%100<10 || day%100>=20) ? 1 : 2];
    };

    const declOfNum = (number, titles) => number + ' ' + titles[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];

    const calcDeadline = (data) => {
        const deadline = new Date(data);
        const toDay = Data.now();

        const toDay = (deadline - toDay)/1000/60/60;
        if (remaining / 24 > 2) {
            return declOfNum(Math.floor(remaining / 24), ['день', 'дня', 'дней']);

        }
        return declOfNum(Math.floor(remaining), ['час', 'часа', 'часов']);
    /* const days = Math.floor(Math.abs((Date.parse(deadline)-Date.now())/ (1000 * 3600 * 24)));
        return days+' '+dayWord(days,['день','дня','дней']);*/
    };


    const renderOrders = () => {
        ordersTable.textContent = '';
        orders.forEach((order, i) => {
            ordersTable.innerHTML += `
            <tr class="order ${order.active ? 'taken' : '' }"
                data-number-order = "${i}">
                <td>${i+1}</td>
                <td>${order.title}</td>
                <td class="${order.currency}"></td>
                <td>${calcDeadline(order.deadline)}</td>
            </tr>`;
        });
    };

    const handlerModal = (event) => {
        const target = event.target;
        const modal = target.closest('.order-modal');
        const order = orders[modal.id];

        const baseAction = () => {
            modal.style.display = 'none';
            toStorage();
            renderOrders();
        }

        if (target.closest('.close') || target === modal) {
            modal.style.display = 'none';
        }

        if (target.classList.contains('get-order')) {
            order.active = true;
            baseAction();
        }

        if (target.id === 'capitulation') {
            order.active = false;
            baseAction();
        }

        if (target.id === 'ready') {
            ordar.splice(orders.indexOf(order), 1);
            baseAction();
        }
    }

    const openModal = (numberOrder) => {
        const order = orders[numberOrder];
        const {title, firstName, email, phone, description, amount,
        currency, deadline, active = false } = order;

        const modal = active ? modalOrderActive : modalOrder;

        const firstNameBlock = modal.querySelector('.firstName'),
        titleBlock = modal.querySelector('.modal-title'),
        emailBlock = modal.querySelector('.email'),
        descriptionBlock = modal.querySelector('.description'),
        deadlineBlock = modal.querySelector('.deadline'),
        currencyBlock = modal.querySelector('.currency_img'),
        countBlock = modal.querySelector('.count'),
        phoneBlock = modal.querySelector('.phone');
    
        modal.id = numberOrder;
        titleBlock.textContent = title;
        firstNameBlock.textContent = firstName;
        emailBlock.textContent = email;
        emailBlock.href = 'mailto:' + email;
        descriptionBlock.textContent = description;
        deadlineBlock.textContent = calcDeadline(deadline);
        currencyBlock.className = 'currency_img';
        currencyBlock.classList.add(currency);
        countBlock.textContent = amount;
    
    
        phoneBlock && (phoneBlock.href = 'tel:' + phone);
    
        modal.style.display = 'flex';

        modal.addEventListener('click', handlerModal);
         
    
    };

    


    



});