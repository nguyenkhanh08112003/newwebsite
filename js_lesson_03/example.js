(function (){
    var hotel = {
        name: 'Park',
        rooms: 240,
        discount: 15,
        offerPrice: function () {
            var offerRate = this.roomMate * ((100 - this.discount) / 100);
            return offerRate;
        }
};
    var hotelName, roomRate, specialRate;

    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');