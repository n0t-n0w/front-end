<template>
    <div class="footer">
        <div class="nav-logo">
            <h1>S<span>
                    <h1>S</h1>
                </span>S</h1>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" class="vk">
            <path class="st0"
                d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z" />
        </svg>
        <svg class="tg" width="50px" height="50px" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
            <path id="telegram-1"
                d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" />
        </svg>
        <h5>© 2023 Student to Student</h5>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
}

</script>

<style scoped>
.footer {
    height: auto;
    min-height: 300px;
    background-color: rgb(208, 208, 208);
    width: 100%;
    margin-top: 200px;
    padding-top: 50px;
    -webkit-box-shadow: 0px 17px 27px -8px rgba(34, 60, 80, 0.2) inset;
    -moz-box-shadow: 0px 17px 27px -8px rgba(34, 60, 80, 0.2) inset;
    box-shadow: 0px 17px 27px -8px rgba(34, 60, 80, 0.2) inset;
}

.nav-logo {
    height: 100%;
    width: 140px;
    margin: 0px auto;
}

.nav-logo>h1 {
    margin-top: 10px;
    font-family: "YagiUhfNo2";
    font-size: 60px;
    font-weight: 400;
    color: var(--blue-color);
    margin-left: 20px;
    user-select: none;
}



.nav-logo>h1>span>h1 {
    display: inline-block;
    font-family: "YagiUhfNo2";
    color: var(--green-color);
    font-size: 60px;
    font-weight: 400;
    transform: scale(1, -1);
    padding-bottom: 6px;

}

.nav-logo>h1>span>h1 {
    user-select: none;
}

.footer h5 {
    color: white;
    font-size: 20px;
    margin-top: 60px;
    text-align: center;
}

.footer>svg {
    display: inline-block;
    margin-top: 20px;
    fill: rgb(255, 255, 255);
}

.footer>svg:hover {
    cursor: pointer
}

svg.vk {
    margin-left: calc(50% - 70px);
}

svg.tg {
    margin-left: 40px
}</style>