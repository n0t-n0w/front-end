<template>
    <section class='profile'>
        <div class="grid-container">
            <div class="block profile-info">
                <div class="profile-img">
                   <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300px" height="300px" viewBox="0 0 20 20" version="1.1">
    
        <title>profile [#1341]</title>
        <desc>Created with Sketch.</desc>
        <defs>

    </defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -2159.000000)" fill="#000000">
                <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M134,2008.99998 C131.783496,2008.99998 129.980955,2007.20598 129.980955,2004.99998 C129.980955,2002.79398 131.783496,2000.99998 134,2000.99998 C136.216504,2000.99998 138.019045,2002.79398 138.019045,2004.99998 C138.019045,2007.20598 136.216504,2008.99998 134,2008.99998 M137.775893,2009.67298 C139.370449,2008.39598 140.299854,2006.33098 139.958235,2004.06998 C139.561354,2001.44698 137.368965,1999.34798 134.722423,1999.04198 C131.070116,1998.61898 127.971432,2001.44898 127.971432,2004.99998 C127.971432,2006.88998 128.851603,2008.57398 130.224107,2009.67298 C126.852128,2010.93398 124.390463,2013.89498 124.004634,2017.89098 C123.948368,2018.48198 124.411563,2018.99998 125.008391,2018.99998 C125.519814,2018.99998 125.955881,2018.61598 126.001095,2018.10898 C126.404004,2013.64598 129.837274,2010.99998 134,2010.99998 C138.162726,2010.99998 141.595996,2013.64598 141.998905,2018.10898 C142.044119,2018.61598 142.480186,2018.99998 142.991609,2018.99998 C143.588437,2018.99998 144.051632,2018.48198 143.995366,2017.89098 C143.609537,2013.89498 141.147872,2010.93398 137.775893,2009.67298" id="profile-[#1341]">

    </path>
                </g>
            </g>
        </g>
    </svg>
                </div>
                <div class="info">
                    <h1 class = 'name'>Алег Пичулька</h1>
                    <h2 class = 'e-mail'>aleg_pichulka_hahaha@gmail.com</h2>
                    <h2 class = 'status'>Ученик</h2>
                    <button class = "edit">Редактировать</button>
                </div>
            </div>
            <div class="block profile-courses">
                <h3>Мои курсы</h3>
                <div class = "list"> 
                    <h1 class ="plus">＋</h1>
                    <h1>Здесь пока ничего нет</h1>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Course from "@/components/Course.vue"

export default {
    components: {
        Course
    },
    data() {
        return {
            my_courses: [
                { id: 0, type: "Физика", title: "Курс по физике 1", image: "2038076.png", price: 4600, pre_price: 5600, percentage: 15, color: "red" },
                { id: 1, type: "Химия", title: "Курс по химии 1", image: "2038076.png", price: 4600, pre_price: 5600, percentage: 15, color: "#619de1" },
                { id: 2, type: "Физика", title: "Курс по физике 2", image: "2038076.png", price: 4600, pre_price: 5600, percentage: 15, color: "#619de1" },
                { id: 3, type: "Физика", title: "Курс по физике 3", image: "2038076.png", price: 4600, pre_price: 5600, percentage: 15, color: "#619de1" },
            ]
        }
    }
}



</script>
<style scoped>
section.profile {
    margin: 120px auto;
    width: 90%;
    height: auto
}

section.profile>.grid-container {
    display: grid;
    grid-column-gap: 2%;
    grid-row-gap: 2%;
}

section.profile>.grid-container>.block {
    height: 400px;
    width: 100%;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 10px 2px rgba(34, 60, 80, 0.2);
    margin: 0;
    padding: 0;
        position: relative;

}

section.profile>.grid-container .profile-img {
    height: 100%;
    background-color: rgb(241, 241, 241);
    width: 500px;
    position: relative;
}
section.profile>.grid-container .profile-img> svg {
    position: absolute;
    top: 50px;
    left: 100px;
}

section.profile>.grid-container .profile-info>.info {
    height: 100%;
    width: calc(100% - 600px);
position: absolute;
top: 0;
left: 570px;



}
section.profile>.grid-container .profile-info>.info h2 {
font-size: 30px;
        font-weight: 300;
        margin: 3% 0;

}
section.profile>.grid-container .profile-info>.info h2.status {
font-size: 30px;
margin: 3% 0;
color: rgb(194, 194, 194);
    
}
section.profile>.grid-container .profile-info>.info h1 {
    font-size: 40px;
    margin: 3% 0;
}
.edit {
    position: absolute;
    bottom: 30px;
    right: 30px;
    border: none;
    background-color: var(--green-color);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 20px;
}
.block.profile-courses > h3 {
    color: rgb(207, 207, 207);
    font-size: 20px;
    font-weight: 300;
    margin: 50px 70px ;
}
.block.profile-courses h1 {
    text-align: center;
    margin: 40px 0;
    font-weight: 300;
}
.plus {
    font-weight: 100;
    color:var(--blue-color);
    font-size: 100px;
    margin: 0 auto;
    border-radius: 50%;
    transition: 0.2s ease-in-out;
}
.plus:hover {
    color: var(--green-color);
    cursor: pointer;
}
</style>