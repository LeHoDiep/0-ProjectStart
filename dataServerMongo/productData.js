const mongoose = require('mongoose')//import trước
//kết nối với server
const pwdMongoDB = 'Ygy2Z08rdJNb1i8x'
const nameDBMongoDB = 'DB_PiedTeamDemo'
// lấy đường dẫn liên kết vào
const url = `mongodb+srv://PiedTeamDemo:${pwdMongoDB}@piedteamdemo.c22y5.mongodb.net/${nameDBMongoDB}?retryWrites=true&w=majority`;
const conectMongooes = async ()=>{
    try{
        await mongoose.connect(url, { 
            useNewUrlParser: true, //useNewUrlParser giúp mình xác nhận url hợp lệ(nó tự phân tích cú pháp url)
            useUnifiedTopology: true,//thằng này giúp tìm server 
        })
        console.log('kết nối server thành công')
    }catch(error){
        console.log('Kết nối server thất bại')
    }
}
conectMongooes()

//--------------------
//mình cần sử dụng Schema để  thao tác với table, Schema là đại diện của 1 collection trong mongoose
const Schema = mongoose.Schema//tạo Schema
const Objectid = Schema.Objectid;
//trong đây xem mỗi table là 1 đối tượng, thay vì create table, ngta sẽ tạo object như sau
//tạo bản lưu các product
//dùng Schame tạo các thiết lập cho bản
const schameProduct = new Schema({
    proName: {type: String},
    proPrice: {type: Number},
})

tblProduct = mongoose.model('Product', schameProduct)
//--------------------------------nameModel, schame tham chiếu
//nếu nameModel có rồi trong mongoDB thì nó sẽ liên kết, ta có thể query Product Collection
//                       thông qua tblProduct
//nếu nameModel chưa có thì nó dựa theo schameProduct tạo ra 1 collection mới trong mongoDB

module.exports = tblProduct //ném tblProduct ra ngoài cho file server sử dụng để viết api
//  giờ mình qua server mình viết api cho vui

