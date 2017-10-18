var nb = devine(1, 100);
var cpt = 0;
var essai;
var msg = "Devinez un nombre entre 1 et 100";

do
{
    essai = prompt(msg);
    cpt++;
    
    if(essai > nb)

        msg = "Naaaan, c'est moins";

    else

        msg = "Meuh noooon, c'est plus!";
    
}
    
while(essai != nb);
    
alert("Top moumoute, vous avez deviné en " + cpt + " coups!");


function devine(min, max)
{
     var nb = min + (max-min+1)*Math.random();
     return Math.floor(nb);
}
