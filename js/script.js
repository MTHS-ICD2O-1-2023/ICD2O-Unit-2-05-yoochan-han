// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yoochan 
// Created on: Mar 2024
// This file contains the JS functions for index.html
function CaculatePay() {
  const wt = parseFloat(document.getElementById("get_wt").value)
  const rate = parseFloat(document.getElementById("get_salary").value)
  const taxRate = parseFloat(0.18)
  // caculate
  const pay = (wt*rate)*(1.00-0.18)
  const taxes = (wt * rate) * 0.18
  // display
  document.getElementById("UrPay").innerHTML = 'Your pay will be: $' + pay.toFixed(2)
  document.getElementById("Tax").innerHTML = 'Govenment will take: $' + taxes.toFixed(2)
}