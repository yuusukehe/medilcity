@media screen and (min-width: 960px) {
    .nav-items__item:before {
      position: absolute;
      content: "";
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 2px;
      background: orange;
      opacity: 0;
    }
  
    .nav-items__item:hover:before {
      opacity: 1;　/* 追記 */
    }
  }
