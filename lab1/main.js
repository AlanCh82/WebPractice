var temp =-1;
$(function(){
    $("input").on("click",function(){
        var numberOfListItem=$("li").length;
        var randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        while(temp==randomChildNumber){
            randomChildNumber=Math.floor(Math.random()*numberOfListItem);
        }
        temp =randomChildNumber;
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src",imgArr[randomChildNumber]);
    });
});
let imgArr =[
    "https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fwww-cw-com-tw%2Farticle%2F202101%2Farticle-5ff76e12dff12.jpg/?w=1260&format=webp",
    "https://lordcat.tw/wp-content/uploads/2021/09/1631538408-378fce845ce05de4c29be3e870b50e13.jpg",
    "https://cdn.cybassets.com/media/W1siZiIsIjE2MzE3L3Byb2R1Y3RzLzMyMzU4MDY0LzE2MDYzNzI1NzRfZmJmYmUzYmNhZTgzMjNmOGQzNTguanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=f0b7888eaa5e55cc"
];