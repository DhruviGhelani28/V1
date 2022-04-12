from django.db import models
import uuid
from django.utils import timezone
from django.contrib.auth.models import User

class Profile(models.Model):
    ROLE_TYPE=(
        ('Supplier','Supplier'),
        ('Worker','Worker'),
        ('Customer','Customer'),
        ('Agency','Agency'),
        ('Model','Model'),
        ('Admin', 'Admin'),
    )
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    username = models.CharField(max_length=200, null=True, blank= True)
    email = models.EmailField(
        verbose_name='Email Address',
        max_length=255,
        unique=True,
    )
    role = models.CharField(max_length=50, choices=ROLE_TYPE)

class Roll(models.Model):
    ROLL_TYPE=(
        ('Supplier','Supplier'),
        ('Worker','Worker'),
        ('Customer','Customer'),
        ('Agency','Agency'),
        ('Model','Model'),
        ('Admin', 'Admin'),
    )
    name = models.CharField( max_length=100 , blank=False, null=True, choices=ROLL_TYPE )
    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, unique=True )
    
    def __str__(self) -> str:
        return str(self.name)
   
class BillStatus(models.Model):
    BILLSTATUS_TYPE=(
        ('Pending','Pending'),
        ('Clear','Clear'),
    )
    name = models.CharField( max_length=50 ,null=True, blank=False, choices=BILLSTATUS_TYPE )
    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, unique=True )
    
    def __str__(self) -> str:
        return str(self.name)   
  
class OrderStatus(models.Model):
    ORDERSTATUS_TYPE=(
        ('Not Given','Not Given'),
        ('Pending','Pending'),
        ('Clear','Clear'),
    )
    name = models.CharField( max_length=50 ,null=True, blank=False, choices=ORDERSTATUS_TYPE )
    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, unique=True )
    
    def __str__(self) -> str:
        return str(self.name)   
 
 
class Billing(models.Model):
    # user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=False)
    username = models.CharField(max_length=50, null=True, blank=False)
    # client = models.ForeignKey(, on_delete=models.SET_NULL,null=True, blank=False)
    roll = models.ForeignKey(Roll, on_delete=models.SET_NULL, null=True, blank=False)
    status = models.ForeignKey(BillStatus, on_delete=models.SET_NULL, null=True, blank=False)
    orderstatus = models.ForeignKey(OrderStatus ,on_delete=models.CASCADE, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    total = models.IntegerField(null=True, blank=True, default= 0)
    date = models.DateTimeField(default=timezone.now,null=True, blank=False)
    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, unique=True)
    
    def __str__(self) -> str:
        return str(self.client.name)

    
class Registration(models.Model):
    roll = models.ForeignKey(Roll, on_delete=models.SET_NULL, null=True, blank=False)

class Task(models.Model):
    owner = models.ForeignKey(Profile,on_delete=models.CASCADE, null=True, blank=False )
    roll = models.ForeignKey(Roll,on_delete=models.CASCADE, null=True, blank=False)
    date = models.DateField(null=True, blank=True)
    time = models.TimeField(null=True, blank=True)
    description = models.TextField(null=True, blank=False)
    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, unique=True)
    
    def __str__(self) -> str:
        return str(self.owner)


class Agency(models.Model):
    agency = models.OneToOneField(Profile, on_delete=models.CASCADE, null=True, blank=False)
    name = models.CharField(max_length=100,null=True, blank=False)
    email = models.EmailField(null=True, blank=False)
    username = models.CharField(max_length=50, null=True, blank=False)
    roll = models.ForeignKey(Roll, on_delete=models.SET_NULL, null=True, blank=False)
    # phone_regex = RegexValidator(regex="^(\+\d{1,3})?,?\s?\d{8,13}")validators=[phone_regex]
    # contact_no = models.CharField(verbose_name=("Mobile Number"),max_length=10, blank=True,null=True)
    mobileNo = models.IntegerField(null=True, blank=False, unique=True)
    agencyName = models.CharField(max_length=200, null=True, blank=False)
    agencyAddress = models.TextField(null=True, blank=False)
    profile_image = models.ImageField(null = True, blank = True, upload_to = "profiles/", default = "profiles/user-default.png")
    location = models.CharField(max_length=200, blank = True, null = True)
    social_website = models.CharField(max_length=200, null=True, blank = True)
    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default = uuid.uuid4, editable=False, primary_key=True, unique= True)
    
    def __str__(self) -> str:
        return str(self.agency.username)
    
class Premise(models.Model):
    agency = models.ForeignKey(Agency,on_delete=models.CASCADE, null=True, blank=False)
    ItemName = models.CharField(max_length=100, null=True, blank=False)
    price = models.IntegerField(null=True, blank=False)
    TimeDurationFrom = models.DateField(null=True, blank=False)
    TimeDurationTo = models.DateField(null=True, blank=False)
    orderstatus = models.ForeignKey(OrderStatus,on_delete=models.CASCADE, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, unique=True)
    
    def __str__(self) -> str:
        return str(self.ItemName)

class Customer(models.Model):
    customer = models.OneToOneField(Profile, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=50, null=True, blank=False)
    username = models.CharField(max_length=50, null=True, blank=False)
    email = models.EmailField(null=True, blank=False)
    mobileNo = models.IntegerField(null=True, blank=False, unique=True)
    companyName = models.CharField(max_length=200, null=True, blank=False)
    companyAddress = models.TextField(null=True, blank=False)
    profile_image = models.ImageField(null = True, blank = True, upload_to = "profiles/", default = "profiles/user-default.png")
    location = models.CharField(max_length=200, blank = True, null = True)
    social_website = models.CharField(max_length=200, null=True, blank = True)
    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default = uuid.uuid4, editable=False, primary_key=True, unique= True)
    
    def __str__(self) -> str:
        return str(self.customer.first_name)

class Supplier(models.Model):
    supplier = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=50, null=True, blank=True)
    username = models.CharField(max_length=50, null=True, blank=False)
    email = models.EmailField(null=True, blank=False)
    mobileNo = models.IntegerField(null=True, blank=False, unique=True)
    organisationName = models.CharField(max_length=200, null=True, blank=False)
    organisationAddress = models.TextField(null=True, blank=False)
    profile_image = models.ImageField(null = True, blank = True, upload_to = "profiles/", default = "profiles/user-default.png")
    location = models.CharField(max_length=200, blank = True, null = True)
    social_website = models.CharField(max_length=200, null=True, blank = True)
    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default = uuid.uuid4, editable=False, primary_key=True, unique= True)
    
    def __str__(self) -> str:
        return str(self.name)
    
class Garment(models.Model):
    supplier = models.ForeignKey(Supplier,on_delete=models.CASCADE, null=True, blank=False)
    GarmentName = models.CharField(max_length=100, null=True, blank=False)
    price = models.IntegerField(null=True, blank=False)
    TimeDurationFrom = models.DateField(null=True, blank=False)
    TimeDurationTo = models.DateField(null=True, blank=False)
    orderstatus = models.ForeignKey(OrderStatus,on_delete=models.CASCADE, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, unique=True)
    
    def __str__(self) -> str:
        return str(self.GarmentName)

class Worker(models.Model):
    worker = models.OneToOneField(Profile, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(null=True, blank=False, max_length=50)
    username = models.CharField(max_length=50, null=True, blank=False)
    email = models.EmailField(null=True, blank=False)
    mobileNo = models.BigIntegerField(null=True, blank=False)
    address = models.CharField(max_length=400, null=True, blank=False)
    short_intro = models.CharField(max_length=500, null=True, blank=True)
    profile_image = models.ImageField(null=True, blank=True,upload_to="profiles/", default="profiles/user-default.png" )
    location = models.CharField(max_length=50, null=True, blank=False)
    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True, primary_key=True)
    
    def __str__(self) -> str:
        return str(self.name)
    

# class User(AbstractBaseUser):
    # email = models.EmailField(
    #     verbose_name='Email Address',
    #     max_length=255,
    #     unique=True,
    # )
    
#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False) # a admin user; non super-user
#     is_superuser = models.BooleanField(default=False) # a superuser

#     # notice the absence of a "Password field", that is built in.

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = [] # Email & Password are required by default.

