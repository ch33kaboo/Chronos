<script>

</script>

<div class="AgesList">
<div class="AgeCycle A1 hover:scale-105 z-20"></div>
<div class="L L1"></div>
<div class="AgeCycle A2 hover:scale-105 z-20"></div>
<div class="L L2"></div>
<div class="AgeCycle A3 hover:scale-105 z-20"></div>
<div class="L L3"></div>
<div class="AgeCycle A4 hover:scale-105 z-20"></div>
<div class="L L4"></div>
<div class="AgeCycle A5 hover:scale-105 z-20"></div>
<div class="L L5"></div>
<div class="AgeCycle A6 hover:scale-105 z-20"></div>
</div>

<style>
.AgesList{
    
    position: absolute;
    left: 20%;
    top:30%;
    height: 60%;
    width: 60%;
}
.AgeCycle{
    background-color: white;
    border-color: #395144;
    border-width: 5px;
    position: absolute;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    left:10%;
}   
.AgeCycle:hover{

}
.A1{
    left:0;
    top:20%
}
.A2{
    left:20%;
    top:35%
}
.A3{
    left:40%;
    top:15%
}
.A4{
    left:55%;
    top:45%
}
.A5{
    left:75%;
    top:28%
}
.A6{
    left:90%;
    top:65%
}
.L{
    position: absolute;
    width: 5px;
    background-color: #395144;
}

.L1{
    height:60px;
    transform: rotate(110deg);
    top: 35%;
    left:17%;
}
.L3{
    height:60px;
    transform: rotate(130deg);
    top: 35%;
    left:56%;
}
.L2{
    height:67px;
    transform: rotate(65deg);
    top: 33%;
    left:37%;
}
.L4{
    height:66px;
    transform: rotate(60deg);
    top: 45%;
    left:72.5%;
}
.L5{
    height:78px;
    transform: rotate(135deg);
    top: 50%;
    left:90%;
}
</style>