function writeCode({ prefix, viewDom, codeDom, code, type }) {
    return new Promise((resolve, reject) => {
        try {
            let n = 0
            const timer = setInterval(() => {
                n++
                viewDom.innerHTML = type ? Prism.highlight(prefix + code.substring(0, n), Prism.languages[type], type) : code.substring(0, n)
                codeDom ? codeDom.innerHTML = prefix + code.substring(0, n) : void 0
                viewDom.scrollTop = viewDom.scrollHeight
                if (n >= code.length) {
                    window.clearInterval(timer)
                    resolve('done')
                }
            }, 10)
        } catch (e) {
            reject(e)
        }
    })
}

const codes = `
.minion {
  background-color: #ffed41;
  height: 360px;
  width: 218px;
  border-radius: 218px 218px 130px 130px;
  position: relative;
}
.minion .glasses {
  position: relative;
  top: 32px;
}
.minion .glasses .glass-line {
  border-radius: 4px;
  height: 12px;
  width: 238px;
  position: relative;
  top: 64px;
  margin: 0 -10px;
}
.minion .glasses .glass-line.top {
  background-color: #494949;
}
.minion .glasses .glass-line.bottom {
  background-color: #2d2d2d;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.15);
}
.minion .glasses .glass {
  background-color: #e2e2e0;
  height: 102px;
  width: 102px;
  border-radius: 102px;
  position: absolute;
  box-shadow: -4px 4px 0px 0px rgba(50, 50, 50, 0.15), 1px -1px 0px 0px #ffffff;
}
.minion .glasses .glass.left {
  left: 10px;
  right: auto;
  z-index: 2;
}
.minion .glasses .glass.right {
  right: 10px;
  left: auto;
  z-index: 1;
}
.minion .glasses .glass::before {
  background-color: #e5bf36;
  height: 78px;
  width: 78px;
  border-radius: 78px;
  display: block;
  position: relative;
  top: 12px;
  left: 12px;
  content: "";
}
.minion .glasses .glass::after {
  background-color: #FFF;
  height: 58px;
  width: 78px;
  border-radius: 78px;
  position: absolute;
  top: 22px;
  left: 12px;
  content: "";
  animation: eyes 5s linear 1s infinite;
}
.minion .glasses .glass .eye {
  background-color: #724c25;
  height: 28px;
  width: 28px;
  border-radius: 28px;
  position: absolute;
  top: 44px;
  z-index: 3;
}
.minion .glasses .glass .eye.left {
  left: 46px;
}
.minion .glasses .glass .eye.right {
  right: 46px;
}
.minion .glasses .glass .eye::before {
  background-color: #2c2d2f;
  height: 12px;
  width: 12px;
  border-radius: 12px;
  display: block;
  position: relative;
  top: 8px;
  left: 8px;
  content: "";
}
.minion .glasses .glass .eye::after {
  background-color: #FFF;
  height: 8px;
  width: 8px;
  border-radius: 8px;
  position: absolute;
  top: 6px;
  left: 12px;
  content: "";
}
.minion .mouth {
  background-color: #603814;
  height: 36px;
  width: 106px;
  position: absolute;
  border-radius: 0 0 106px 106px;
  top: 182px;
  left: 55px;
  overflow: hidden;
}
.minion .mouth::before {
  background-color: #FFED41;
  height: 80px;
  width: 205px;
  position: relative;
  display: block;
  border-radius: 0 0 150px 150px;
  top: -70px;
  left: -50px;
  content: "";
  z-index: 2;
  box-shadow: 0px 3px 0px 0px rgba(50, 50, 50, 0.15);
}
.minion .mouth .teeth {
  list-style: none;
  z-index: 1;
  position: absolute;
  top: -10px;
  left: -25px;
}
.minion .mouth .teeth li {
  float: left;
  height: 15px;
  width: 20px;
  background: #FFF;
  display: inline-block;
  border-radius: 0 0 15px 15px;
}
.minion .mouth .teeth li:first-child,
.minion .mouth .teeth li:last-child {
  height: 10px;
}
.minion .pants {
  background-color: #2b5b89;
  height: 66px;
  position: relative;
  top: 270px;
  border-radius: 0 0 128px 128px;
  z-index: 2;
}
.minion .pants::before {
  background-color: #2b5b89;
  height: 58px;
  width: 138px;
  display: block;
  position: relative;
  top: -58px;
  margin: 0 auto;
  content: "";
}
.minion .pants::after {
  background-color: #224467;
  height: 44px;
  width: 58px;
  display: block;
  position: relative;
  top: -76px;
  border-radius: 0 0 58px 58px;
  margin: 0 auto;
  content: "";
}
.minion .belts .belt {
  background-color: #224467;
  height: 16px;
  width: 70px;
  position: absolute;
  top: 225px;
  z-index: 3;
}
.minion .belts .belt::after {
  background-color: #2d2d2b;
  height: 11px;
  width: 11px;
  border-radius: 11px;
  position: absolute;
  content: "";
}
.minion .belts .belt.left {
  left: -10px;
  transform: scale(1) rotate(24deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
}
.minion .belts .belt.left::after {
  left: 56px;
  top: 3px;
}
.minion .belts .belt.right {
  right: -10px;
  transform: scale(1) rotate(-28deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
}
.minion .belts .belt.right::after {
  right: 57px;
  top: 3px;
}
.minion .legs > .legs-left {
  background: #224467;
  height: 22px;
  width: 44px;
  position: absolute;
  top: 358px;
  z-index: 1;
  left: 60px;
}
.minion .legs > .legs-left::after {
  position: absolute;
  content: "";
  height: 0;
  width: 0;
  border-bottom: 22px solid #EC7E65;
  border-right: 10px solid transparent;
}
.minion .legs > .legs-right {
  background: #224467;
  height: 22px;
  width: 44px;
  position: absolute;
  top: 358px;
  z-index: 1;
  right: 60px;
}
.minion .legs > .legs-right::after {
  position: absolute;
  content: "";
  height: 0;
  width: 0;
  border-bottom: 22px solid #EC7E65;
  border-left: 10px solid transparent;
  right: 0;
}
.minion .legs .shoe {
  background-color: #424242;
  width: 52px;
  height: 18px;
  position: absolute;
  top: 380px;
}
.minion .legs .shoe.left {
  left: 50px;
  border-radius: 18px 0 0 0;
}
.minion .legs .shoe.left::before {
  left: 20px;
  border-left: 34px solid transparent;
}
.minion .legs .shoe.right {
  right: 50px;
  border-radius: 0 18px 0 0;
}
.minion .legs .shoe.right::before {
  right: 20px;
  border-right: 34px solid transparent;
}
.minion .legs .shoe::after {
  background-color: #2d2d2d;
  width: 56px;
  height: 5px;
  position: absolute;
  content: "";
  top: 18px;
  left: -2px;
}
.minion .legs .shoe::before {
  position: absolute;
  content: "";
  height: 0;
  width: 0;
  border-top: 5px solid #224467;
}
.minion .hands .hand {
  background-color: #e5c034;
  height: 100px;
  width: 16px;
  position: absolute;
  top: 242px;
}
.minion .hands .hand.left {
  left: -16px;
  border-radius: 16px 0 0 0;
}
.minion .hands .hand.right {
  right: -16px;
  border-radius: 0 16px 0 0;
}
.minion .hands .fingers {
  background-color: #424242;
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  top: 350px;
  z-index: 1;
}
.minion .hands .fingers.left {
  left: -6px;
  border-radius: 0 16px 0 0;
}
.minion .hands .fingers.left::before {
  left: 5px;
}
.minion .hands .fingers.left::after {
  left: 0px;
}
.minion .hands .fingers.right {
  right: -6px;
  border-radius: 16px 0 0 0;
}
.minion .hands .fingers.right::before {
  right: 5px;
}
.minion .hands .fingers.right::after {
  right: 0px;
}
.minion .hands .fingers::after {
  background-color: #383838;
  height: 16px;
  width: 16px;
  content: "";
  border-radius: 16px;
  position: absolute;
  top: 15px;
  z-index: 2;
}
.minion .hands .fingers::before {
  background-color: #2c2c2c;
  height: 16px;
  width: 16px;
  content: "";
  border-radius: 16px;
  position: absolute;
  top: 8px;
  z-index: 1;
}
.minion .hands .glove {
  background-color: #424242;
  position: absolute;
  height: 36px;
  width: 16px;
  border-radius: 0 0 16px 16px;
  top: 342px;
  z-index: 3;
}
.minion .hands .glove.left {
  left: -15px;
}
.minion .hands .glove.left::before {
  left: -7px;
}
.minion .hands .glove.right {
  right: -15px;
}
.minion .hands .glove.right::before {
  right: -7px;
}
.minion .hands .glove::before {
  position: absolute;
  content: "";
  height: 0;
  width: 0;
  top: -15px;
  border-bottom: 30px solid #424242;
  border-left: 30px solid transparent;
  transform: scale(1) rotate(45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
}
`

const param = {
    prefix: '',
    viewDom: document.querySelector('.code'),
    codeDom: document.querySelector('#codes'),
    code: codes,
    type: 'css'
}
writeCode(param)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })