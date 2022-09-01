"use strict";

var tabsBtn = document.querySelectorAll(".accordion_item");
var tabsItems = document.querySelectorAll(".collapse");
tabsBtn.forEach(function (item) {});

function onTabClick(item) {
  item.addEventListener("click", function () {
    var currentBtn = item;
    var tabId = currentBtn.getAttribute("data-tab");
    var currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('active');
      });
      tabsItems.forEach(function (item) {
        item.classList.remove('active');
      });
      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
}

;
document.querySelector('.collapse').click();