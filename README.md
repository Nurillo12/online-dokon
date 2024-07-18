Loyiha haqida qisqacha:

 Bu loyiha uncha murakkab bo'lmagan, sodda ko'rinishga ega bo'lgan loyiha. Loyihada qanday imkoniyatlar mavjud? Bu loyihada foydalanuvchi ro'yxatdan o'tadi va o'z profiliga ega bo'ladi.
 Shu bilan birgalikda, o'zining profiliga kontent qo'shishi va uni o'zgartishi yoki umuman o'chirib tashlashi mumkin.
  Biz bu loyihada express.js frameworkidan foydalandik. Uni yuklab olish uchun:
      
      npm i express

Express.jsni asosiy back-end faylda e'lon qilib qo'yishimiz kerak:

     const express = require('express')
     const app = express()

Biz front-end qismimizni back-enddan turib ko'tardik, va bu uchun biz ejs kutubxonasidan foydalandik. Uni yuklab olish esa quyidagicha:

    npm install ejs

Ejs ni ham sozlab olishimiz kerak, bu uchun esa .htnl formatdagi fayllarni .ejs formatga olib o'tamiz va asosiy back-end faylimizga quyidagi kodlarni yozib qo'yishimiz kerak:

    app.set('view engine', 'ejs')

Buni ejs ni o'zini dokumentatsiyasida ham ko'rsatib o'tilgan. Dokumentatsiyasi uchun havola:

    https://www.npmjs.com/package/ejs

Biz bu loyihada ma'lumotlarni saqlab olish uchun esa MongoDB Compass dasturidan foydalandik.
