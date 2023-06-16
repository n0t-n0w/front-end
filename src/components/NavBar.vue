<template>
    <div class="navbar">
        <input class="menu-checkbox" type="checkbox" />
        <div class="menu-button">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <a href="/"><div class="nav-logo" v-if="windowWidth > 1000">
            <h1>Student<span> to </span>Student</h1>
        </div>
        <div class="nav-logo" v-else>
            <h1>S<span>
                    <h1>S</h1>
                </span>S</h1>
        </div>
        </a>

        <div class="login-button">
            Вход
        </div>

        <div class="nav-links-box">
            <ul class="nav-links-list">
                <li>
                    <div class="nav-item">
                        <a href = "#/courses/">Курсы</a>
                    </div>
                </li>
                <li>
                    <div class="nav-item">
                        Биржа
                    </div>
                </li>
                <li>
                    <div class="nav-item">
                        Консультации
                    </div>

                </li>
            </ul>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            windowWidth: window.innerWidth
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    },

    methods: {
        onResize() {
            this.windowWidth = window.innerWidth
        }
    }
}
let isShadowed = false;
addEventListener("scroll", (event) => {
    if (window.pageYOffset != 0 && !isShadowed) {
        if (document.querySelector(".navbar").classList.contains("unshadowed")) {
            document.querySelector(".navbar").classList.replace("unshadowed", "shadowed");
        }
        else {
            document.querySelector(".navbar").classList.add("shadowed");
        }
        if (document.querySelector(".nav-links-box").classList.contains("unshadowed")) {
            document.querySelector(".nav-links-box").classList.replace("unshadowed", "shadowed");
        }
        else {
            document.querySelector(".nav-links-box").classList.add("shadowed");
        }
        isShadowed = true
    }
    else if (isShadowed && window.pageYOffset == 0) {
        document.querySelector(".navbar").classList.replace("shadowed", "unshadowed");
        document.querySelector(".nav-links-box").classList.replace("shadowed", "unshadowed");
        isShadowed = false;
    }

});

</script>

<style scoped>
a {
    text-decoration: none;
    margin: 0;
    padding: 0;
    color: black;
}
a:focus {
    color: inherit;

}
.menu-button {
    height: 0;
    width: 0;
    overflow: hidden;
}

@keyframes addNavShadow {
    0% {
        -webkit-box-shadow: 5px 5px 8px -55px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 5px 5px 8px -55px rgba(34, 60, 80, 0.2);
        box-shadow: 5px 5px 8px -55px rgba(34, 60, 80, 0.2);
    }

    100% {
        -webkit-box-shadow: 5px 5px 8px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 5px 5px 8px 0px rgba(34, 60, 80, 0.2);
        box-shadow: 5px 5px 8px 0px rgba(34, 60, 80, 0.2);
    }
}

@keyframes removeNavShadow {
    100% {
        -webkit-box-shadow: 5px 5px 8px -55px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 5px 5px 8px -55px rgba(34, 60, 80, 0.2);
        box-shadow: 5px 5px 8px -55px rgba(34, 60, 80, 0.2);
    }

    0% {
        -webkit-box-shadow: 5px 5px 8px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 5px 5px 8px 0px rgba(34, 60, 80, 0.2);
        box-shadow: 5px 5px 8px 0px rgba(34, 60, 80, 0.2);
    }
}

.navbar {
    height: 90px;
    width: 100%;
    background-color: rgb(255, 255, 255);
position: fixed;
 top: 0; 
 z-index: 100000;

}

.navbar.shadowed {
    animation: addNavShadow 0.5s ease-in-out 1;
    -webkit-box-shadow: 5px 5px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 5px 5px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 5px 5px 8px 0px rgba(34, 60, 80, 0.2);
}

.navbar.unshadowed {
    animation: removeNavShadow 0.5s ease-in-out 1;
    -webkit-box-shadow: 5px 5px 8px -55px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 5px 5px 8px -55px rgba(34, 60, 80, 0.2);
    box-shadow: 5px 5px 8px -55px rgba(34, 60, 80, 0.2);
}


.nav-logo {
    float: left;
    height: 100%;
    margin-left: 20px;
}

.nav-logo:hover {
    cursor: pointer;
}

.nav-logo>h1 {
    margin-top: 10px;
    font-family: "YagiUhfNo2";
    font-size: 50px;
    font-weight: 400;
    color: var(--blue-color); 
    margin-left: 20px;
    user-select: none;
}

.nav-logo>h1>span {
    font-family: "YagiUhfNo2";
    font-size: 50px;
    font-weight: 400;


    color: var(--green-color);
}

.nav-logo>h1>span>h1 {
    user-select: none;
}

.nav-logo>svg {
    width: 100%;
    height: 35px;
    margin-top: 17px;

}

.nav-links-box {
    float: right;
    width: 40%;
    font-size: 17px;
    height: 100%;


}

.nav-links-box>.nav-links-list {
    list-style: none;
}


.nav-links-box>.nav-links-list>li>.nav-item {
    width: auto;
    margin-top: 35px;
    display: inline-block;
    font-weight: 400;
    transition: 0.2s ease-in-out;
}

.nav-links-box>.nav-links-list>li>.nav-item:hover {
    cursor: pointer;
}

.nav-links-box>.nav-links-list>li>.nav-item:after {
    content: '';
    display: inline-block;
    width: 100%;

    border-top: 1px solid rgb(144, 144, 144);
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
}

.nav-links-box>.nav-links-list>li>.nav-item:hover:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}

.nav-links-box>.nav-links-list>li {
    display: inline-block;
    margin: 0px 4%;
}

.login-button {
    background-color: var(--green-color);
    border-radius: 5px;
    padding: 5px 14px 7px 14px;
    height: 20px;
    width: auto;
    font-size: 17px;
    font-weight: 400;
    margin: 28px 45px;
    color: white;
    transition: 0.2s ease-in-out;
    float: right;
}

.login-button:hover {
    cursor: pointer;
    background-color: var(--dark-green-color);
}

.menu-checkbox {
    display: none;
}

@media screen and (max-width: 1000px) {

    .nav-logo {
        margin-left: 0px;
    }

    .nav-logo>h1>span>h1 {
        display: inline-block;
        font-family: "YagiUhfNo2";
        font-size: 50px;
        font-weight: 400;
        transform: scale(1, -1);
        padding-bottom: 6px;

    }

    .menu-button {
        height: 70px;
        width: 70px;
        padding: 30px 25px 0 0;
        margin-left: 20px;

        float: left;
    }

    .nav-links-box {
        float: none;
        position: absolute;
        width: 200px;
        height: calc(100vh - 100px);
        margin: 90px 0 0 0px;
        padding: 10px;
        padding-top: 20px;

        /* to stop flickering of text in safari */
        transform: translate(-100%, 0);

        transform-origin: 0% 0%;
        background-color: rgb(255, 255, 255);
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);


    }

    .navbar .menu-checkbox {
        display: block;
        width: 56px;
        height: 43px;
        position: absolute;
        top: 10px;
        left: 20px;

        cursor: pointer;

        opacity: 0;
        /* hide this */
        z-index: 2;
        /* and place it over the hamburger */

        -webkit-touch-callout: none;
    }

    .navbar>.menu-button>span {

        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        margin-left: 10px;
        ;
        position: relative;

        background: #c6c6c6;
        border-radius: 3px;

        z-index: 1;

        transform-origin: 4px 0px;

        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
            background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
            opacity 0.55s ease;

    }

    .menu-button span:first-child {
        transform-origin: 0% 0%;
    }

    .menu-button span:nth-last-child(2) {
        transform-origin: 0% 100%;
    }

    /* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
    .menu-checkbox:checked~.menu-button span {
        opacity: 1;
        transform: rotate(45deg) translate(3px, -2px);
        background: #232323;
    }

    /*
 * But let's hide the middle one.
 */
    .menu-checkbox:checked~.menu-button span:nth-last-child(2) {
        opacity: 0;
        transform: rotate(45deg) scale(0.2, 0.2);

    }

    /*
 * Ohyeah and the last one should go the other direction
 */
    .menu-checkbox:checked~.menu-button span:nth-last-child(1) {
        transform: rotate(-45deg) translate(-3px, 2px);
    }

    .menu-checkbox:checked~.nav-links-box {
        transform: none;
    }

    .nav-links-box {
        -webkit-box-shadow: 6px 7px 6px -3px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 6px 7px 6px -3px rgba(34, 60, 80, 0.2);
        box-shadow: 6px 7px 6px -3px rgba(34, 60, 80, 0.2);
    }

    .nav-links-box>.nav-links-list>li {
        display: block;
        height: auto;

    }

    .nav-links-box>.nav-links-list>li>.nav-item {
        display: block;

    }

    .nav-links-box.shadowed {
        animation: addNavShadow 0.5s ease-in-out 1;
        -webkit-box-shadow: 5px 5px 8px 0px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 5px 5px 8px 0px rgba(34, 60, 80, 0.2);
        box-shadow: 5px 5px 8px 0px rgba(34, 60, 80, 0.2);
    }

    .nav-links-box.unshadowed {
        animation: removeNavShadow 0.5s ease-in-out 1;
        -webkit-box-shadow: 5px 5px 8px -55px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 5px 5px 8px -55px rgba(34, 60, 80, 0.2);
        box-shadow: 5px 5px 8px -55px rgba(34, 60, 80, 0.2);
    }

}</style>