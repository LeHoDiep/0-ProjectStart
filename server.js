const express = require('express');
const app = express();
const cors = require("cors");
//thiết lập truy cập cho các trang web khác
//cài đặt cors
const corsOptions ={ 
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions))

//Routes  
app.get('/', (req,res)=>{
    res.send('home')
})
//get(lấy dữ liệu), //post(thêm dữ liệu) //delete(xóa dữ liệu), patch(update dữ liệu)
//  '/' là routes chỉ mục

//middlewares: thằng này là thằng trung gian giữa việc tiếp nhận các dữ liệu trả về từ routes và
//đem đến cho người dùng, hoặc lưu trữ

const tblProduct = require('./dataServerMongo/productData') //liên kết với table tblProduct
//cách dùng khá giống với mongoDB, ta sẽ dùng find để tìm kiếm đối tượng
// http://localhost:4000/product sẽ lấy được full danh sách của bản product
app.get('/products', async (req,res)=>{
    try{
        const dataProduct = await tblProduct.find({})
        res.send(dataProduct)
    }catch(error){
        console.log('Can\'t Query Product')
    }
    
})
//get Product theo id
app.get('/products/search/:id', async (req,res)=>{
    try{
        const dataProduct = await tblProduct.find({_id : req.params.id})
        res.send(dataProduct)
    }catch(error){
        console.log('Can\'t Query Product by id')
    }
    
})
//insert http://localhost:4000/products/add/number1/9000
app.get(`/products/add/:proName/:proPrice`, async (req,res)=>{
    try{
        const newPro = new tblProduct({proName: req.params.proName, proPrice:req.params.proPrice})
        await newPro.save()
        res.send('data inserted')
    }catch(error){
        console.log('Can\'t insert new Product')
    }
})
//delete
app.get(`/products/delete/:id/`, async (req,res)=>{
    try{
        const dataProduct = await tblProduct.find({_id : req.params.id})
        if(dataProduct != ''){
            await tblProduct.deleteOne({_id : req.params.id})
            res.send('deleted' + dataProduct)
        }else{
            res.send('not found object to delete')
        }
    }catch(error){
        res.send('Can\'t delete Product')
    }
})
//update:demo bằng cách tạo 1 form update bên index.pug
app.get(`/products/update`, async (req,res)=>{
    try{
        
        const dataBeforeUpdate = await tblProduct.find({proName : req.query.proName})
        if(dataBeforeUpdate != ''){
            await tblProduct.updateOne({proName : req.query.proName},{proPrice: req.query.proPrice})
            const dataAfterUpdate =  await tblProduct.find({proName : req.query.proName})
            res.send(dataAfterUpdate)
            
        }else{
            res.send('not found object to update')
        }
    }catch(error){
        res.send('Can\'t updated Product')
    }
})











//------------------------------------------
//chỉnh cho server về tầng port 3000
app.listen(4000)
