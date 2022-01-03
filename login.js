function validate()
{
    var username=document.getElementById("username").value;
    var username=document.getElementById("password").value;
    if (username=="admin" && password=="user")
    {
        alert("Login Failed");
        return false;
    }
    else
    {
        alert("Login Successfully");
    }

}