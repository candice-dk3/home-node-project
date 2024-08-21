<template>
   <section class="inner-contact-sec">
     <div class="contact-h2-sec">
         <h2 class="contact-h2">Let's get in contact</h2>
     </div>
         <div class="contact-sec">
             <div class="form-sec">
                 <form action="https://formspree.io/f/xzbnybjb" method="POST" target="blank">
                 <label class="name">Your Name: <br><input type="name" name="name"></label>
                 <label class="name">Your Number: <br><input type="phone-number" name="phone-number"></label>
                 <label class="name">Your email: <br><input type="email" name="email"></label>
                 <label class="name">Your message: <br><textarea name="message"></textarea></label>
                 <div class="buttons">
                     <button type="reset" class="clear-btn">Clear</button>
                     <button type="submit" class="send-btn">Send</button>
                 </div>
                 </form>
             </div>
             <div class="contact-us-sec">
                 <h3>Find us on</h3>
             </div>
         </div>
   </section>
 </template>
 <script>
 export default {
     
 }
 </script>
 <style scoped>
     .inner-contact-sec{
        background-color: #cb997ec2;
        height: 100%;
        margin-top: 3.9rem;
    }
     .contact-sec{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
     }
     .contact-h2-sec{
        padding: 3rem;
     }
    .contact-h2{
        color: white;
        text-align: left;
        margin-left: 6vw;
        font-size: 2rem;
    }
    .form-sec{
        background-color: #F5B583;
        width: 30rem;
        height: auto;
        margin-left: 6vw;
        margin-bottom: 4rem;
     }
    .buttons{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
     }
    .clear-btn, .send-btn{
        background-color: transparent;
        color: white;
        width: 6rem;
     }
     .name{
        color: black;
        margin-left: 0px;
        margin-bottom: 1rem;
     }
    textarea{
        width: 24rem;
        height: 200px;
        background-color: #ffffff;
        border: none;
    }
    form {
        padding: 1.3rem;
    }

    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
    input{
        background-color: #ffffff;
        height: 2rem;
        width: 24rem;
        border: none;
    }
    button {
        font-weight: 700;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }

    button:hover {
        background-color: #d69868;
    }
    .name{
        width: 250px;
        margin-left: 25px;
        text-align: start;
    }
    .message{
        height: 200px;
        margin-bottom: 20px
    }

    @media only screen and (max-width: 300px){
        .contact-sec{
        grid-template-columns: repeat(1, 1fr);
        }
        .form-sec{
        width: 16rem;
        }
        input{
            width: 13rem;
        }
        textarea{
        width: 13rem;
        }
        .name{
        margin-left: 5px;
    }
    }
 </style>