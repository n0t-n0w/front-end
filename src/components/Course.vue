<template>
    <div class = "course-container">
        <h4 class = "subject">{{ data.type }}</h4>
        <h2 class = "course-title">{{ data.title }}</h2>
        <div class = "price-container">
            <h4>{{ data.pre_price }}<span class = "little-ind">₽</span></h4>
            <h1>{{ data.price }}<span class = "little-ind">₽</span></h1>
            <div class = "sale"><h4>{{ data.percentage }}<span class = "little-ind">%</span></h4> </div>
        </div>
        <button class = 'learn-more'>Узнать подробнее</button>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}



</script>

<style scoped>
.little-ind {
    font-size: 70%;;
}
.price-container>h1 {
    margin: 20px;
    margin-top: 0;
    font-weight: 700;
}
.price-container>h4 {
    margin: 20px;
    margin-top: 25px;
        margin-bottom: 0;
            font-weight: 700;
            position: relative;


}
.price-container>h4 ::before{
    content: "";
    position: absolute;
    width: 50px;
    border-bottom: 1px solid red;
    top: 7px;
    left: -4px;
}
.price-container .sale {

    position: absolute;
    top: 20px;
    right: 20px;
        border-radius: 3px;

    background-color: rgb(254, 105, 105);
}
.price-container .sale > h4 {
    color: white;
    padding: 5px 10px;
    font-weight: 400;
}

    .course-container {
       
        background-color: v-bind('data.color');
        border-radius: 7px;
        aspect-ratio: 1/1;
        position: relative;
    }
   .course-container .subject {
        color: black;
        font-weight: 300;
        font-size: 15px;
       position: absolute;
       top: 20px;
       left: 20px;
    }
  .course-container .course-title {
            font-weight: 700;

        font-size: 25px;
        color: black;
        margin: 20px;
        position: absolute;
        top: 40px;
       left: 20px;
        

    }
    .course-container .price-container {
        width: calc(100% - 40px);
        background-color: #ffffff73;
        border-radius: 5px;
        height: 30%;
        position: absolute;
        left: 20px;
        bottom: 70px;

    }
      .course-container .learn-more {
        width: calc(100% - 40px);
        height: 40px;
        position: absolute;
        left: 20px;
        bottom: 20px;
        background-color: #00000012;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 17px;
        font-weight: 500;
          transition: 0.2s ease-in-out;
    text-align: center;
    display: inline-block;
    text-transform: capitalize;
    overflow: hidden;
    text-decoration: none;

      }
      .course-container .learn-more::after {
    content: "➜";
    color: rgb(255, 255, 255);

    font-size: 15px;
    position: absolute;
    opacity: 0;
    height: 30px;
    width: 40px;
 transition: 0.2s ease-in-out;    text-indent: -30px;

}
.course-container .learn-more:hover::after {
    opacity: 1;
    text-indent: 0px;
}
.course-container .learn-more:hover {
    text-indent: -20px;
    cursor: pointer;
    background-color: #0000001f;
}
</style>