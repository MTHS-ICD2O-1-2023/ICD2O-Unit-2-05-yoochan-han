// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yoochan 
// Created on: Mar, 2024 (edited on: Apr 18, 2024)
// This file contains the JS functions for index.html
function CaculatePay() {
  const workTime = parseFloat(document.getElementById("get_workTime").value)
  const rate = parseFloat(document.getElementById("get_salary").value)
  const taxRate = parseFloat(0.18)
  // caculate
  const pay = (workTime*rate)*(1.00-taxRate)
  const taxes = (workTime * rate) * taxRate
  // display
  document.getElementById("UrPay").innerHTML = 'Your pay will be: $' + pay.toFixed(2)
  document.getElementById("Tax").innerHTML = 'Govenment will take: $' + taxes.toFixed(2)
}