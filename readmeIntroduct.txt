1.xây dựng mô hình cơ bản gồm webpack | babel
2.xây dựng gulp hỗ trợ thay thế html -> pug | css -> sass| tối ưu hóa img
3.hướng dẫn sử dụng mongoDB.js
4.thay thế mongoDB bằng công nghệ mongoose để chuẩn bị cho việc viết api
    tức là chê mongoDB , cài đặt mongoose (demo mongoose thông qua productData.js ,
                                             quản lý data của table product)
    4.1 cài npm i express --save để thao tác với server tạo ra các api 
    tạo server bằng nodemon, webpack các thử trước, nói sơ về mô hình tạo api , routes

    rồi demo mongoose
    cài đặt mongoose (demo mongoose thông qua productData.js ,
                                             quản lý data của table product)
                    export table Product để file server.js sử dụng tạo api
        quay qua demo tiếp server.js
        sau khi hoàn thiện bộ api, ta qua http để làm bộ http(controller) phù hợp với bộ api đã tạo

--demo thêm ảnh vào dựa trên import

--sau khi đã test bundle thành công 
--mình cho folder này kết nối với git bằng lệnh git init (tạo thư mục .git để dùng được các comandline)
--tạo repository trên github trước, rồi liên kết với folder có sẵn này bằng câu lệnh
 	git remote add origin https://github.com/LeHoDiep/0-ProjectStart.git
--nếu bạn chưa đăng nhập account thì nên đăng nhập 
--sau đó dùng lệnh:  git config --global --add safe.directory H:/04-myJavascriptTours/nodejs/0-ProjectStart
--	để xác thực tính an toàn của project (github sợ mình đưa code cho người lạ)
	--nếu làm đúng thì mình sẽ có hiển thị nhánh (master)

--đẩy project lên github bằng cú pháp: git add .  xác nhận những thứ đã thêm
					git commit -m "sms" ghi chú lại những gì đã làm
					nếu ép khai tên thì cứ khai tên bth
--					git push origin branch
$ git push origin master
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
--lỗi này là : muốn hỏi mình rằng đã liên kết repository chưa ? $ git remote add origin https://github.com/LeHoDiep/0-ProjectStart.git 
--sau đó chạy lại push là xong
