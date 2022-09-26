function eBissexto(ano)
{
    let bissexto;
    if(ano % 4 === 0)
    {
        bissexto = true;
    }
    if(ano % 100 === 0)
    {
        bissexto = false;
    }
    if(ano % 400 === 0)
    {
        bissexto = true;
    } 
    if(ano % 4 != 0 || ano % 100 != 0 || ano % 400 != 0)
    {
        bissexto = false;
    }
    return console.log(bissexto);
}

eBissexto(100);
eBissexto(400);
eBissexto(16);
eBissexto(163);
eBissexto(13);
eBissexto(401);



