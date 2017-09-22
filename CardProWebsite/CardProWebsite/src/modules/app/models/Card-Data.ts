﻿import { CARD, Content } from "./interface-card";

export const CARDES: CARD[] = [
    { Id: 1, Name: "Family", Type: 4, url: require("../../../assets/img/FamilyCard.jpg"), TIVT1: "<center>__</center>", TIVT2: "<center>__</center>", TIVT3: "- Miễn phí rút tiền mặt tại ATM Sacombank.", TIC1: "200.000 VNĐ", TIC2: "Từ 10 triệu đến dưới 200 triệu VNĐ", TIC3: "1,6% - 2,5%", TIC4: "Không miễn lãi", TIC5: "50%-80%", TIC6: "done", TIC7: " ", class: "Classic", detail1: "<strong>Miễn phí rút tiền mặt </strong>tại tất cả ATM/POS của Sacombank.", detail2: "Hạn mức rút tiền mặt lên đến 50% - 80% hạn mức được cấp.", detail3: "Lãi suất cạnh tranh trên thị trường chỉ từ 1,6%-2,5%/tháng.", detail4: "Số tiền thanh toán tối thiểu hàng tháng 5% dư nợ, tối thiểu 100.000 VNĐ.", detail5: "Tham gia chương trình Sacombank Plus: Giảm giá đến 50% tại tất cả điểm mua sắm, ẩm thực, du lịch,giáo dục...", detail6: "", icondetail1: "credit_card", icondetail2: "card_giftcard", icondetail3: "card_membership", icondetail4: "card_giftcard", icondetail5: "card_travel", icondetail6: "" },
    { Id: 2, Name: "Visa Infinite", Type: 3, url: require("../../../assets/img/Infinitecard_Front.jpg"), TIVT1: "- Bảo hiểm tai nạn du lịch toàn cầu 22 tỷ đồng", TIVT2: "Miễn phí thường niên. Không giới hạn lượt sử dụng", TIVT3: "- Tặng 01 đêm nghỉ dưỡng cao cấp trị giá 23 triệu đồng.<br>- Tặng miễn phí 12 lượt Golf/Spa hằng năm", TIC1: "19.999.000 VNĐ", TIC2: "Từ 500 triệu VNĐ", TIC3: "2,15%", TIC4: "55 ngày", TIC5: "50%", TIC6: "done", TIC7: "done", class: "Gold", detail1: "<strong>Hạn mức tín dụng không giới hạn.</strong>", detail2: "Tặng gói bào hiểm du lịch toàn cầu lên đến<strong> 22 tỷ đồng</strong> và các gói bảo hiềm khác(*).", detail3: "<strong>Tặng gói thành viên Priority Pass sử dụng hơn 1000 phòng chờ VIP tại các sân bay toàn cầu không giới hạn số lượt(*).</strong>", detail4: "Đặc quyền lựa chọn gói<strong> ưu đãi miễn phí chơi Golf hoặc Spa (tối đa 12 lần/năm).</strong>", detail5: "Được nhận ưu đãi đặc biệt là <strong>1 đêm nghỉ dưỡng trị giá lên đến 23 triệu đồng</strong>", detail6: "Tham gia chương trình trả góp lãi suất 0%.", icondetail1: "card_giftcard", icondetail2: "card_giftcard", icondetail3: "card_giftcard", icondetail4: "card_giftcard", icondetail5: "card_giftcard", icondetail6: "card_travel" },
    { Id: 3, Name: "MasterCard World", Type: 3, url: require("../../../assets/img/MCworld.jpg"), TIVT1: "- Bảo hiểm tai nạn du lịch toàn cầu: 10,5 tỷ đồng.<br>- Bảo hiểm mất hành lý: 10,5 triệu đồng.<br>- Bảo hiểm hành lý trả chậm: 5,25 triệu đồng.<br>- Bảo hiểm trì hoãn chuyến bay: 5,25 triệu đồng.", TIVT2: "- Miễn phí thường niên, tặng 2 lượt sử dụng đầu tiên.<br>- Tặng thêm 2 lượt sử dụng với mỗi 100 triệu đồng doanh số giao dịch thanh toán hàng quý.", TIVT3: "- Tặng 3 lượt sử dụng/năm", TIC1: "1.499.000 VNĐ", TIC2: "Từ 200 triệu VNĐ", TIC3: "1,6% - 2,5%", TIC4: "55 ngày", TIC5: "50%", TIC6: "done", TIC7: "done", class: "Gold", detail1: "<strong>Hạn mức tín dụng không giới hạn.</strong>", detail2: "Tặng gói bào hiểm du lịch toàn cầu tối đa<strong> 10,5 tỷ đồng</strong> và các gói bảo hiềm khác(*).", detail3: "<strong>Tặng  gói hội viên Priority Pass </strong>khi sử dụng phòng chờ VIP tại sân bay và tặng lượt sử dụng nếu đạt đủ điều kiện(*).", detail4: "Đặc quyền lựa chọn gói<strong> ưu đãi miễn phí chơi Golf hoặc Spa (tối đa 3 lần/năm).</strong>", detail5: "Mua trước, trả sau với tối đa 55 ngày miễn lãi.", detail6:"Tham gia chương trình trả góp lãi suất 0%.", icondetail1: "card_giftcard", icondetail2: "card_giftcard", icondetail3: "card_travel", icondetail4: "card_membership", icondetail5: "card_travel", icondetail6: "card_membership" },
    { Id: 4, Name: "Visa Platinum", Type: 3, url: require("../../../assets/img/VisaCreditPlantinum.jpg"), TIVT1: "- Bảo hiểm tai nạn du lịch toàn cầu: 10,5 tỷ đồng.<br>- Bảo hiểm mất hành lý: 10,5 triệu đồng.<br>- Bảo hiểm hành lý trả chậm: 5,25 triệu đồng.<br>- Bảo hiểm trì hoãn chuyến bay: 5,25 triệu đồng.", TIVT2: "- Tặng thẻ thành viên và 2 lượt sử dụng khi đạt doanh số chi tiêu 200 triệu/năm tại thời điểm xét doanh số. Tặng thêm 2 lượt sử dụng với mỗi 100 triệu đồng doanh số giao dịch thanh toán hàng quý.", TIVT3: "<center>__</center>", TIC1: "999.000 VNĐ", TIC2: "Từ 50 triệu VNĐ", TIC3: "1,6% - 2,15%", TIC4: "55 ngày", TIC5: "50%", TIC6: "done", TIC7: "done", class: "Gold", detail1: "<strong>Hạn mức tín dụng không giới hạn.</strong>", detail2: "Tặng gói bào hiểm du lịch toàn cầu tối đa<strong> 10,5 tỷ đồng</strong> và các gói bảo hiềm khác.", detail3: "<strong>Tặng miễn phí gói hội viên Priority Pass</strong> và tặng lượt sử dụng khi đạt điều kiện(*).", detail4: "Mua trước, trả sau với tối đa 55 ngày miễn lãi.", detail5: "Trở thành khách hàng VIP  của Tập đoàn Sacombank.", detail6: "Tham gia chương trình trả góp lãi suất 0%.", icondetail1: "card_giftcard", icondetail2: "card_giftcard", icondetail3: "card_giftcard", icondetail4: "card_travel", icondetail5: "card_travel",icondetail6: "card_membership" },
    { Id: 5, Name: "MasterCard Gold", Type: 3, url: require("../../../assets/img/MCcreditgold.jpg"), TIVT1: "<center>__</center>", TIVT2: "<center>__</center>", TIVT3: "<center>__</center>", TIC1: "399.000 VNĐ", TIC2: "Từ 20 triệu đến dưới 200 triệu VNĐ", TIC3: "1,6% - 2,5%", TIC4: "55 ngày", TIC5: "50%", TIC6: "done", TIC7: "done", class: "Classic", detail1: "<strong>Mua trước, trả sau với tối đa 55 ngày miễn lãi.</strong>", detail2: "Rút tiền mặt 50% hạn mức tín dụng tại tất cả ATM có biểu tượng MasterCard.", detail3: "Ưu đãi hấp dẫn trên toàn cầu dành riêng cho chủ thẻ MasterCard.", detail4: "Thanh toán tại hàng triệu điểm chấp nhận thẻ trên thế giới và qua Internet.", detail5: "Tham gia chương trình Sacombank Plus: Giảm giá đến 50% tại tất cả điểm mua sắm, ẩm thực, du lịch, giáo dục …  ", detail6: "Tham gia chương trình trả góp lãi suất 0%.", icondetail1: "card_membership", icondetail2: "card_giftcard", icondetail3: "card_membership", icondetail4: "card_travel", icondetail5: "card_giftcard", icondetail6: "card_membership" },
    { Id: 6, Name: "JCB Motor Card", Type: 4, url: require("../../../assets/img/Motorcard.jpg"), TIVT1: "<center>__</center>", TIVT2: "<center>__</center>", TIVT3: "- Miễn phí rút tiền mặt tại ATM Sacombank.", TIC1: "299.000 VNĐ", TIC2: "Từ 10 triệu đến dưới 20 triệu VNĐ", TIC3: "1,6% - 2,5%", TIC4: "55 ngày", TIC5: "50% - 80%", TIC6: "done", TIC7: "done", class: "Classic", detail1: "<strong>Miễn phí rút tiền mặt </strong>tại tất cả ATM/POS của Sacombank.", detail2: "<strong>Mua trước, trả sau với tối đa 55 ngày miễn lãi.</strong>", detail3: "Rút tiền mặt 50% hạn mức tín dụng tại tất cả ATM có biểu tượng JCB trong nước và quốc tế.", detail4: "Rất nhiều chương trình ưu đãi đặc biệt khắp thế giới từ tổ chức thẻ quốc tế JCB.", detail5: "Tham gia chương trình Sacombank Plus: Giảm giá đến 50% tại tất cả điểm mua sắm, ẩm thực, du lịch, giáo dục...", detail6: "Tham gia chương trình trả góp lãi suất 0%.", icondetail1: "card_giftcard", icondetail2: "card_giftcard", icondetail3: "card_giftcard", icondetail4: "card_giftcard", icondetail5: "card_membership", icondetail6: "card_membership" },
    { Id: 7, Name: "Visa Gold", Type: 3, url: require("../../../assets/img/VisaCreditGold.jpg"), TIVT1: "<center>__</center>", TIVT2: "<center>__</center>", TIVT3: "<center>__</center>", TIC1: "399.000 VNĐ", TIC2: "Từ 20 triệu đến dưới 50 triệu VNĐ", TIC3: "1,6% - 2,15%", TIC4: "55 ngày", TIC5: "50%", TIC6: "done", TIC7: "done", class: "Gold", detail1: "Mua trước, trả sau với tối đa 55 ngày miễn lãi.", detail2: "Rút tiền mặt 50% hạn mức tín dụng tại tất cả ATM có biểu tượng Visa.", detail3: "Thanh toán tại hàng triệu điểm chấp nhận thẻ trên thế giới và qua Internet.", detail4: "Đặc biệt hữu ích với các gia đình có người thân, con em đang du học trong việc thanh toán chi phí học tập, sinh hoạt một cách kịp thời.", detail5: "Tham gia chương trình Sacombank Plus: Giảm giá đến 50% tại tất cả điểm mua sắm, ẩm thực, du lịch, giáo dục...", detail6: "", icondetail1: "card_membership", icondetail2: "card_giftcard", icondetail3: "card_membership", icondetail4: "card_giftcard", icondetail5: "card_membership", icondetail6: "card_membership" },
    { Id: 8, Name: "MasterCard Classic", Type: 3, url: require("../../../assets/img/MCcreditclassic.jpg"), TIVT1: "<center>__</center>", TIVT2: "<center>__</center>", TIVT3: "<center>__</center>", TIC1: "299.000 VNĐ", TIC2: "Từ 10 triệu đến dưới 20 triệu VNĐ", TIC3: "1,6% - 2,5%", TIC4: "55 ngày", TIC5: "50%", TIC6: "done", TIC7: "done", class: "Classic", detail1: "Mua trước, trả sau với tối đa 55 ngày miễn lãi.", detail2: "Rút tiền mặt 50% hạn mức tín dụng tại tất cả ATM có biểu tượng MasterCard.", detail3: "Ưu đãi hấp dẫn trên toàn cầu dành riêng cho chủ thẻ MasterCard.", detail4: "Thanh toán tại hàng triệu điểm chấp nhận thẻ trên thế giới và qua Internet", detail5: "Tham gia chương trình Sacombank Plus: Giảm giá đến 50% tại tất cả điểm mua sắm, ẩm thực, du lịch, giáo dục …  ", detail6: "Tham gia chương trình trả góp lãi suất 0%.", icondetail1: "card_giftcard", icondetail2: "card_giftcard", icondetail3: "card_membership", icondetail4: "card_giftcard", icondetail5: "card_giftcard", icondetail6: "card_membership" },
    { Id: 9, Name: "JCB Car Card", Type: 4, url: require("../../../assets/img/Carcard.jpg"), TIVT1: "<center><center>__</center></center>", TIVT2: "<center>__</center>", TIVT3: "- Miễn phí rút tiền mặt tại ATM Sacombank.", TIC1: "399.000 VNĐ", TIC2: "Từ 20 triệu đến dưới 50 triệu VNĐ", TIC3: "1,6% - 2,5%", TIC4: "55 ngày", TIC5: "50%-80%", TIC6: "done", TIC7: "done", class: "Classic", detail1: "<strong>Miễn phí rút tiền mặt </strong>tại tất cả ATM/ POS của Sacombank.", detail2: "<strong>Mua trước, trả sau với tối đa 55 ngày miễn lãi.</strong>", detail3: "Rút tiền mặt 50% hạn mức tín dụng tại tất cả ATM có biểu tượng JCB trong nước và quốc tế.", detail4: "Rất nhiều chương trình ưu đãi đặc biệt khắp thế giới từ tổ chức thẻ quốc tế JCB.", detail5: "Tham gia chương trình Sacombank Plus: Giảm giá đến <strong>50%</strong> tại tất cả điểm mua sắm, ẩm thực, du lịch, giáo dục...", detail6: "Tham gia chương trình trả góp lãi suất 0%.", icondetail1: "card_giftcard", icondetail2: "card_membership", icondetail3: "card_giftcard", icondetail4: "card_membership", icondetail5: "card_giftcard", icondetail6: "card_membership" },
    { Id: 10, Name: "Visa Classic", Type: 3, url: require("../../../assets/img/VisaCreditClassic.jpg"), TIVT1: "<center>__</center>", TIVT2: "<center>__</center>", TIVT3: "<center>__</center>", TIC1: "299.000 VNĐ", TIC2: "Từ 10 triệu đến dưới 20 triệu VNĐ", TIC3: "1,6% - 2,15%", TIC4: "55 ngày", TIC5: "50%", TIC6: "done", TIC7: "done", class: "Classic", detail1: "<strong>Mua trước, trả sau với tối đa 55 ngày miễn lãi.</strong>", detail2: "Rút tiền mặt 50% hạn mức tín dụng tại tất cả ATM có biểu tượng Visa.", detail3: "Thanh toán tại hàng triệu điểm chấp nhận thẻ trên thế giới và qua Internet.", detail4: "Đặc biệt hữu ích với các gia đình có người thân, con em đang du học trong việc thanh toán chi phí học tập, sinh hoạt một cách kịp thời.", detail5: "Tham gia chương trình Sacombank Plus: Giảm giá đến <strong>50% </strong>tại tất cả điểm mua sắm, ẩm thực, du lịch, giáo dục...", detail6: "Tham gia chương trình trả góp lãi suất 0%.", icondetail1: "card_giftcard", icondetail2: "card_giftcard", icondetail3: "card_giftcard", icondetail4: "card_giftcard", icondetail5: "card_membership", icondetail6: "card_membership" },
    { Id: 11, Name: "Visa Signature", Type: 2, url: require("../../../assets/img/VisaCreditSignature.jpg"), TIVT1: "- Bảo hiểm tai nạn du lịch toàn cầu: 10,5 tỷ đồng.<br>- Bảo hiểm mất hành lý: 10,5 triệu đồng.<br>- Bảo hiểm hành lý trả chậm: 5,25 triệu đồng.<br>- Bảo hiểm trì hoãn chuyến bay: 5,25 triệu đồng.", TIVT2: "- Miễn phí sử dụng phòng chờ với mỗi doanh số giao dịch 100 triệu đồng/quý được tặng 2 lượt sử dụng.", TIVT3: "- Tích lũy dặm bay Sacombank.<br>- Tặng 500 dặm cho giao dịch đầu tiên.<br>- Tặng thêm 4.500 dặm khi đạt 100 triệu đồng doanh số giao dịch.", TIC1: "1.499.000 VNĐ", TIC2: "Từ 200 triệu VNĐ", TIC3: "1,6% - 2,15%", TIC4: "55 ngày", TIC5: "50%", TIC6: "done", TIC7: " ", class: "Gold", detail2: "Hạn mức tín dụng không giới hạn ", detail1: "<strong>Tích lũy dặm Sacombank khi chi tiêu bằng thẻ. Thưởng ngay 5.000 dặm cho khách hàng đạt đủ điều kiện (*).</strong>", detail3: "Tặng gói bào hiểm du lịch toàn cầu tối đa 10,5 tỷ đồng và các gói bảo hiềm khác", detail4: "<strong>Miễn phí thành viên thẻ Priority Pass </strong>sử dụng phòng chờ VIP tại hơn 1000 sân bay khắp thế giới.", detail5: "Mua trước, trả sau với tối đa 55 ngày miễn lãi.", detail6: "Tham gia chương trình trả góp lãi suất 0%.", icondetail1: "card_travel", icondetail2: "card_giftcard", icondetail3: "card_travel", icondetail4: "card_giftcard", icondetail5: "card_membership", icondetail6: "card_membership" },
    { Id: 12, Name: "Visa Ladies Frist", Type: 3, url: require("../../../assets/img/VisaLadiesFirst.jpg"), TIVT1: "<center>__</center>", TIVT2: "<center>__</center>", TIVT3: "<center>__</center>", TIC1: "299.000 VNĐ", TIC2: "Từ 10 triệu đến dưới 200 triệu VNĐ.", TIC3: "1,6% - 2,15%", TIC4: "55 ngày", TIC5: "50%", TIC6: "done", TIC7: "done", class: "Classic", detail1: "<strong>Nhiều chương trình ưu đãi dành riêng cho phái đẹp</strong> như dịch vụ làm đẹp, thời trang, mua sắm.", detail2: "<strong>Mua trước, trả sau với tối đa 55 ngày miễn lãi.</strong>", detail3: "Rút tiền mặt 50% hạn mức tín dụng tại tất cả ATM có biểu tượng Visa trong nước và quốc tế.", detail4: "Thanh toán tại hàng triệu điểm chấp nhận thẻ trên thế giới và qua Internet.", detail5: "Tham gia chương trình Sacombank Plus: Giảm giá đến 50% khi dùng thẻ thanh toán tại các điểm mua sắm, ẩm thực, du lịch...", detail6: "Tham gia chương trình trả góp lãi suất 0%.", icondetail1: "card_giftcard", icondetail2: "card_membership", icondetail3: "card_giftcard", icondetail4: "card_giftcard", icondetail5: "card_giftcard", icondetail6: "card_membership" },
    { Id: 13, Name: "UnionPay", Type: 3, url: require("../../../assets/img/UnionPaycard.jpg"), TIVT1: "<center>__</center>", TIVT2: "<center>__</center>", TIVT3: "<center>__</center>", TIC1: "299.000 VNĐ", TIC2: "Từ 10 triệu đến dưới 200 triệu VNĐ.", TIC3: "1,6% - 2,5%", TIC4: "55 ngày", TIC5: "50%", TIC6: "done", TIC7: "done", class: "Classic", detail1: "<strong>Mua trước, trả sau với tối đa 55 ngày miễn lãi.</strong>", detail2: "Được nhận diện và chấp nhận giao dịch 100% ở khắp Trung Quốc.", detail3: "Thuận tiện cho việc giao thương, du lịch, học tập và nhiều ưu đãi tại Trung Quốc.", detail4: "Thanh toán tại hàng triệu điểm chấp nhận thẻ UnionPay trên thế giới", detail5: "Tham gia chương trình Sacombank Plus: Giảm giá đến 50% khi dùng thẻ thanh toán tại các điểm mua sắm, ẩm thực, du lịch...", detail6: "Tham gia chương trình trả góp lãi suất 0%.", icondetail1: "card_giftcard", icondetail2: "card_travel", icondetail3: "card_giftcard", icondetail4: "card_travel", icondetail5: "card_giftcard", icondetail6: "card_membership" },
    { Id: 14, Name: "Visa Platinum Cashback", Type: 1, url: require("../../../assets/img/VisaCreditPlantinumCashback.jpg"), TIVT1: "- Bảo hiểm tai nạn du lịch toàn cầu: 10,5 tỷ đồng.<br>- Bảo hiểm mất hành lý: 10,5 triệu đồng.<br>- Bảo hiểm hành lý trả chậm: 5,25 triệu đồng.<br>- Bảo hiểm trì hoãn chuyến bay: 5,25 triệu đồng.", TIVT2: "<center>__</center>", TIVT3: "- Hoàn tiền lên đến 5% với số tiền hoàn lên đến 7,2 triệu/năm.", TIC1: "999.000 VNĐ", TIC2: "Từ 50 triệu VNĐ", TIC3: "1,6% - 2,15%", TIC4: "55 ngày", TIC5: "50%", TIC6: "done", TIC7: " ", class: "Classic", detail1: "<strong>Hoàn tiền lên đến 5% </strong>với số tiền hoàn lên đến 7,2 triệu/năm.", detail2: "<strong>Hạn mức tín dụng không giới hạn.</strong>", detail3: "An tâm du lịch với gói bảo hiểm du lịch toàn cầu lên đến <strong>10,5 tỷ đồng</strong> và các gói bảo hiểm khác(*).", detail4: "Mua trước, trả sau với tối đa 55 ngày miễn lãi.", detail5: "Giảm giá khắp thế giới dành riêng cho dòng thẻ cao cấp Visa Platinum.", detail6: "Tham gia chương trình trả góp lãi suất 0%.", icondetail1: "card_travel", icondetail2: "card_giftcard", icondetail3: "card_travel", icondetail4: "card_giftcard", icondetail5: "card_membership", icondetail6: "card_membership" },
];

export const CONTENT: Content[] = [
    {
        ContentType: 1, title: "Hoàn tiền", contentline1: "<strong>Hoàn tiền lên đến 5% và tối đa 7,2 triệu/năm.</strong>", contentline2: "Hạn mức tín dụng không giới hạn.", contentline3: "Tặng gói bảo hiểm du lịch toàn cầu lên đến 10,5 tỷ đồng và các gói bảo hiểm khác (*).", contentline4: "Mua trước, trả sau với tối đa 55 ngày miễn lãi.", contentline5: "Tham gia chương trình trả góp lãi suất 0%.", contentline6: "Ưu đãi khắp thế giới dành riêng cho chủ thẻ cao cấp Visa Platinum.", contentline7: "", iconline1: "local_atm", iconline2: "assignment", iconline3: "card_travel", iconline4: "store", iconline5: "card_membership", iconline6: "card_membership", iconline7: ""
    },
    { ContentType: 2, title: "Dặm bay", contentline1: "<strong>Tích dặm bay tốt nhất và bay miễn phí không giới hạn với thẻ đẳng cấp của Visa.</strong>", contentline2: "Thưởng ngay 5,000 dặm trong đó 500 dặm cho giao dịch đầu tiên và 4,500 dặm khi đạt doanh số 100 triệu.", contentline3: "Nhận 1 dặm Sacombank với mỗi 20,000VND chi tiêu qua thẻ để đổi tiền mặt, phí thường niên, vé máy bay nhiều hãng hàng không và đổi dặm xét hạng/ đổi ngang dặm thưởng Vietnamairlines.", contentline4: "Tặng thẻ Priority Pass vào phòng chờ VIP tại hơn 1,000 sân bay quốc tế và miễn phí 2 lượt sử dụng phòng chờ với mỗi doanh số 100 triệu.", contentline5: "An tâm du lịch với gói bảo hiểm du lịch toàn cầu 10,5 tỷ và dịch vụ hỗ trợ toàn cầu 24/07.", contentline6: "Tham gia chương trình trả góp lãi suất 0%.", contentline7: "Mua trước trả sau với thời gian miễn lãi 55 ngày.", iconline1: "credit_card", iconline2: "flight_takeoff", iconline3: "card_giftcard", iconline4: "card_membership", iconline5: "card_travel", iconline6: "card_travel", iconline7: "local_atm" },
    { ContentType: 3, title: "Điểm thưởng", contentline1: "<strong>Tích lũy điểm thưởng khi chi tiêu để đổi hàng ngàn quà tặng có giá trị. </strong>", contentline2: "Các đặc quyền cao cấp: Bảo hiểm du lịch toàn cầu, thẻ hội viên Priority Pass, miễn phí Golf/Spa (đối với hạng thẻ cao cấp).", contentline3: "Tham gia trả góp lãi suất 0% cho thương hiệu bất kì.", contentline4: "Mua trước, trả sau với tối đa 55 ngày miễn lãi.", contentline5: "Các ưu đãi đặc biệt, giảm giá cho tất cả hạng thẻ.", iconline1: "card_giftcard", iconline2: "card_giftcard", iconline3: "assignment", iconline4: "store", iconline5: "card_giftcard", iconline6: "", contentline6: "", contentline7: "", iconline7: "" },
    { ContentType: 4, title: "Rút tiền miễn phí", contentline1: "<strong>Miễn phí rút tiền mặt tại hệ thống Sacombank với hạn mức lên đến 80% hạn mức tín dụng.</strong>", contentline2: "Lãi suất cạnh tranh trên thị trường chỉ từ 1,6 – 2,5%/ tháng.", contentline3: "Chấp nhận giao dịch tại hàng triệu điểm chấp nhận thẻ áp dụng thẻ quốc tế.", contentline4: "Tham gia chương trình trả góp lãi suất 0% tại các điểm Sacombank liên kết.", contentline5: "Mua trước, trả sau với tối đa 55 ngày miễn lãi.", iconline1: "local_atm", iconline2: "card_giftcard", iconline3: "swap_horiz", iconline4: "account_balance", iconline5: "store", contentline6: "", iconline6: "", contentline7: "", iconline7:"" },
];
