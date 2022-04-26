x=11
f= y =>
{
    y=x
    console.log(`${y} is even`)
}
func=(fulfill,reject)=>
{
    if (x%2==0) 
    {
        setTimeout(f, 3000)
        fulfill()
    }
    else
    {
        reject()
    }
           
}
let cal=new Promise(func)
async function print()
{
  try
  {
   
    await cal
         
  }
  catch
  {
    let m=y=>console.log(`${y} is odd`)
    m(x)
  }
}
print()
