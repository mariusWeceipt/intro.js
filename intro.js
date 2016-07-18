.introjs-overlay {
  position: absolute;
  z-index: 999999;
  background-color: #000;
  opacity: 0.85;
  -webkit-transition: all 0.3s ease-out;
     -moz-transition: all 0.3s ease-out;
      -ms-transition: all 0.3s ease-out;
       -o-transition: all 0.3s ease-out;
          transition: all 0.3s ease-out;
}

.introjs-fixParent {
  z-index: auto !important;
  opacity: 1.0 !important;
  position: absolute !important;
  -webkit-transform: none !important;
     -moz-transform: none !important;
      -ms-transform: none !important;
       -o-transform: none !important;
          transform: none !important;
}

.introjs-showElement,
tr.introjs-showElement > td,
tr.introjs-showElement > th {
  z-index: 9999999 !important;
}

.introjs-disableInteraction {
  z-index: 99999999 !important;
  position: absolute;
  background-color: white;
  opacity: 0;
  filter: alpha(opacity=0);
}

.introjs-relativePosition,
tr.introjs-showElement > td,
tr.introjs-showElement > th {
  position: relative;
}

.introjs-helperLayer {
  position: absolute;
  z-index: 9999998;
  background-color: #FFF;
  background-color: rgba(255,255,255,.9);
  border: 1px solid #777;
  border: 1px solid rgba(0,0,0,.5);
  border-radius: 4px;
  box-shadow: 0 2px 15px rgba(0,0,0,.4);
  -webkit-transition: all 0.3s ease-out;
     -moz-transition: all 0.3s ease-out;
      -ms-transition: all 0.3s ease-out;
       -o-transition: all 0.3s ease-out;
          transition: all 0.3s ease-out;
}

.introjs-tooltipReferenceLayer {
  position: absolute;
  visibility: hidden;
  z-index: 10000000;
  background-color: transparent;
  -webkit-transition: all 0.3s ease-out;
     -moz-transition: all 0.3s ease-out;
      -ms-transition: all 0.3s ease-out;
       -o-transition: all 0.3s ease-out;
          transition: all 0.3s ease-out;
}

.introjs-helperLayer *,
.introjs-helperLayer *:before,
.introjs-helperLayer *:after {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
      -ms-box-sizing: content-box;
       -o-box-sizing: content-box;
          box-sizing: content-box;
}

.introjs-helperNumberLayer {
  position: absolute;
  visibility: visible;
  top: -16px;
  left: -16px;
  z-index: 9999999999 !important;
  width: 20px;
  height:20px;
  box-shadow: 0 2px 5px rgba(0,0,0,.4);
}

.introjs-arrow {
  border: 5px solid white;
  content:'';
  position: absolute;
}
.introjs-arrow.top {
  top: -10px;
  border-top-color:transparent;
  border-right-color:transparent;
  border-bottom-color:white;
  border-left-color:transparent;
}
.introjs-arrow.top-right {
  top: -10px;
  right: 10px;
  border-top-color:transparent;
  border-right-color:transparent;
  border-bottom-color:white;
  border-left-color:transparent;
}
.introjs-arrow.top-middle {
  top: -10px;
  left: 50%;
  margin-left: -5px;
  border-top-color:transparent;
  border-right-color:transparent;
  border-bottom-color:white;
  border-left-color:transparent;
}
.introjs-arrow.right {
  right: -10px;
  top: 10px;
  border-top-color:transparent;
  border-right-color:transparent;
  border-bottom-color:transparent;
  border-left-color:white;
}
.introjs-arrow.right-bottom {
  bottom:10px;
  right: -10px;
  border-top-color:transparent;
  border-right-color:transparent;
  border-bottom-color:transparent;
  border-left-color:white;
}
.introjs-arrow.bottom {
  bottom: -10px;
  border-top-color:white;
  border-right-color:transparent;
  border-bottom-color:transparent;
  border-left-color:transparent;
}
.introjs-arrow.left {
  left: -10px;
  top: 10px;
  border-top-color:transparent;
  border-right-color:white;
  border-bottom-color:transparent;
  border-left-color:transparent;
}
.introjs-arrow.left-bottom {
  left: -10px;
  bottom:10px;
  border-top-color:transparent;
  border-right-color:white;
  border-bottom-color:transparent;
  border-left-color:transparent;
}

.introjs-tooltip {
  position: absolute;
  visibility: visible;
  padding: 10px;
  background-color: white;
  min-width: 200px;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: 0 1px 10px rgba(0,0,0,.4);
  -webkit-transition: opacity 0.1s ease-out;
     -moz-transition: opacity 0.1s ease-out;
      -ms-transition: opacity 0.1s ease-out;
       -o-transition: opacity 0.1s ease-out;
          transition: opacity 0.1s ease-out;
}

.introjs-tooltipbuttons {
  white-space: nowrap;
}

.introjs-bullets {
  text-align: center;
}
.introjs-bullets ul {
  clear: both;
  margin: 15px auto 0;
  padding: 0;
  display: inline-block;
}
.introjs-bullets ul li {
  list-style: none;
  float: left;
  margin: 0 2px;
}
.introjs-bullets ul li a {
  display: block;
  width: 6px;
  height: 6px;
  background: #ccc;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  text-decoration: none;
}
.introjs-bullets ul li a:hover {
  background: #999;
}
.introjs-bullets ul li a.active {
  background: #999;
}

.introjs-progress {
  overflow: hidden;
  height: 10px;
}
.introjs-progressbar {
  float: left;
  font-size: 10px;
  text-align: center;
}

.introjsFloatingElement {
  position: absolute;
  height: 0;
  width: 0;
  left: 50%;
  top: 50%;
}

.introjs-fixedTooltip {
  position: fixed;
}

.introjs-hint {
  position: absolute;
  background: transparent;
  width: 20px;
  height: 15px;
  cursor: pointer;
}
.introjs-hint:focus {
    border: 0;
    outline: 0;
}
.introjs-hidehint {
  display: none;
}

.introjs-fixedhint {
  position: fixed;
}

.introjs-hint:hover > .introjs-hint-pulse {
  border: 5px solid rgba(60, 60, 60, 0.57);
}

.introjs-hint-pulse {
  width: 20px;
  height: 20px;
  border: 5px solid rgba(60, 60, 60, 0.27);
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  background-color: rgba(136, 136, 136, 0.24);
  z-index: 10;
  position: absolute;
  -webkit-transition: all 0.2s ease-out;
     -moz-transition: all 0.2s ease-out;
      -ms-transition: all 0.2s ease-out;
       -o-transition: all 0.2s ease-out;
          transition: all 0.2s ease-out;
}
.introjs-hint-no-anim .introjs-hint-dot {
  -webkit-animation: none;
  -moz-animation: none;
  animation: none;
}
.introjs-hint-dot {
  border: 10px solid rgba(146, 146, 146, 0.36);
  background: transparent;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  border-radius: 60px;
  height: 50px;
  width: 50px;
  -webkit-animation: introjspulse 3s ease-out;
  -moz-animation: introjspulse 3s ease-out;
  animation: introjspulse 3s ease-out;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  position: absolute;
  top: -15px;
  left: -15px;
  z-index: 1;
  opacity: 0;
}

@-moz-keyframes intrjspulse {
 0% {
    -moz-transform: scale(0);
    opacity: 0.0;
 }
 25% {
    -moz-transform: scale(0);
    opacity: 0.1;
 }
 50% {
    -moz-transform: scale(0.1);
    opacity: 0.3;
 }
 75% {
    -moz-transform: scale(0.5);
    opacity: 0.5;
 }
 100% {
    -moz-transform: scale(1);
    opacity: 0.0;
 }
}

@-webkit-keyframes "introjspulse" {
 0% {
    -webkit-transform: scale(0);
    opacity: 0.0;
 }
 25% {
    -webkit-transform: scale(0);
    opacity: 0.1;
 }
 50% {
    -webkit-transform: scale(0.1);
    opacity: 0.3;
 }
 75% {
    -webkit-transform: scale(0.5);
    opacity: 0.5;
 }
 100% {
    -webkit-transform: scale(1);
    opacity: 0.0;
 }
}
