
import json
from django.core.files import File
from urllib import request, response
import pathlib
import os
import datetime
from pytest import console_main
from .models import *
from .models import Supplier, Customer, Worker, Agency
from .serializers import *
from rest_framework.views import APIView
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from rest_framework import status, viewsets
from rest_framework_simplejwt.serializers import TokenObtainSerializer, TokenObtainPairSerializer
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
import glob
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.views import TokenViewBase
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError


# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [

        {'GET' : 'api/Users'},# available only for admin
        {'GET': 'api/Users/userId'},

        #for supplier
        {'GET' : 'api/Users/Suppliers'},
        {'GET' : 'api/Users/Suppliers/supplierId'},
        {'GET' : 'api/Users/Suppliers/supplierId/Tasks'},
        {'GET' : 'api/Users/Suppliers/supplierId/Tasks/taskId'},
        {'GET' : 'api/Users/Suppliers/supplierId/Bills'},
        {'GET' : 'api/Users/Suppliers/supplierId/Bills/billId'},

        #for agency
        {'GET' : 'api/Users/Agencies'},
        {'GET' : 'api/Users/Agencies/agencyId'},
        {'GET' : 'api/Users/Agencies/agencyId/Tasks'},
        {'GET' : 'api/Users/Agencies/agencyId/Tasks/taskId'},
        {'GET' : 'api/Users/Agencies/agencyId/Bills'},
        {'GET' : 'api/Users/Agencies/agencyId/Bills/billId'},

        #for customers
        {'GET' : 'api/Users/Customers'},
        {'GET' : 'api/Users/Customers/cutomerId'},
        {'GET' : 'api/Users/Customers/cutomerId/Tasks'},
        {'GET' : 'api/Users/Customers/cutomerId/Tasks/taskId'},
        {'GET' : 'api/Users/Customers/cutomerId/Bills'},
        {'GET' : 'api/Users/Customers/cutomerId/Bills/billId'},

        #for workers
        {'GET' : 'api/Users/Workers'},
        {'GET' : 'api/Users/Workers/workerId'},
        {'GET' : 'api/Users/Workers/workerId/Tasks'},
        {'GET' : 'api/Users/Workers/workerId/Tasks/taskId'},
        {'GET' : 'api/Users/Workers/workerId/Bills'},
        {'GET' : 'api/Users/Workers/workerId/Bills/billId'},
    ]
    return Response(routes)


# class TokenObtainPairView(TokenObtainPairView):
#     """
#     Takes a set of user credentials and returns an access and refresh JSON web
#     token pair to prove the authentication of those credentials.
#     """
#     serializer_class = TokenObtainPairSerializer
#     @api_view(['POST'])
#     def post(request):
#         serializer =  TokenObtainPairSerializer(data=request.data)
#         print("sdfgsdfgsdfgs")
#         try:
#             if serializer.is_valid():
#                 print("-=-=\n1321313",serializer.validated_data, serializer.data )
#                 return Response(serializer.data, status=status.HTTP_200_OK)
#             else:
#                 print("-=-=\npoeriwpejri", serializer.data )
#                 return Response(serializer.errors, status=status.HTTP_406_NOT_ACCEPTABLE)
#         except Exception as e:
#             raise e


        

# class InvalidUser(AuthenticationFailed):
#     status_code = status.HTTP_406_NOT_ACCEPTABLE
#     default_detail = ("Credentials is invalid or didn't match")
#     default_code = 'user_credentials_not_valid'
#     # return Response({default_detail : "Credentials is invalid or didn't match", default_code : 'user_credentials_not_valid'})


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many = True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def getUser(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)
   
@api_view(['POST'])
@permission_classes([AllowAny])
def UserRegistrationViewSet(request):
    print("\n\nRegister")
    data = request.data['data']
    print("\n\n\n", data)
    user = User.objects.create(
        username = data['username'],
        email = data['email']

    )
    user.set_password(data['password'])
    user.save()
    print("User", user)
    profile = Profile.objects.create(
        user= user,
        username = user.username,
        email = user.email,
        role = data['role']
    )
    print("Profile", profile)
    profile.save() 
    print("role:::", profile.role) 

    if data['role'] == "Supplier":
        supplier = Supplier.objects.create(
            supplier = user,
            username = user.username,
            email = user.email,
            name = data['fullname'],
            mobileNo = data['mobileNo'],
            organisationName = data['organizationName'],
            organisationAddress =  data['organizationAddress'],
            profile_image = data['profileImage'],
            location = data['location'],
            social_website =  data['socialWebsite'],

        )
        print("-=-=-=-=-\n", supplier.profile_image)
        supplier.save()

    if data['role'] == 'Agency':
        agency= Agency.objects.create(
            agency = user,
            username = user.username,
            email = user.email,
            name = data['fullname'],
            mobileNo = data['mobileNo'],
            agencyName = data['agencyName'],
            agencyAddress =  data['agencyAddress'],
            profile_image = data['profileImage'],
            location = data['location'],
            social_website =  data['socialWebsite'],
        )
        agency.save()

    if data['role'] == 'Customer':
        customer = Customer.objects.create(
            customer = user,
            username = user.username,
            email = user.email,
            name = data['fullname'],
            mobileNo = data['mobileNo'],
            companyName = data['companyName'],
            companyAddress =  data['companyAddress'],
            profile_image = data['profileImage'],
            location = data['location'],
            social_website =  data['socialWebsite'],
        )
        customer.save()
        print("customer:: ",customer)

    if data['role'] == 'Worker':
        worker = Worker.objects.create(
            worker = profile,
            username = profile.username,
            email = profile.email,
            name = data['fullname'],
            mobileNo = data['mobileNo'],
            short_intro = data['shortIntro'],
            address =  data['address'],
            profile_image = data['profileImage'],
            location = data['location'],
           
        )
        worker.save()
        # workers = Worker.objects.all()
        print("Worker\n\n\n", worker)

    if data['role'] == 'Model':
        model = Actor.objects.create(
            model = profile,
            username = profile.username,
            email = profile.email,
            name = data['fullname'],
            mobileNo = data['mobileNo'],
            address =  data['address'],
            background = data['background'],
            profile_image = data['profileImage'],
            nativePlace = data['nativePlace'],
            salary = 0
        )
        model.save()
    
    serializer = UserSerializer(user, many = False)
    return Response(serializer.data)

@api_view(['POST'])
@csrf_exempt
@permission_classes([IsAuthenticated])
def UserLoginViewSet(request):
    # user = request.user
    # print("\n\nLogin")
    data = request.data
    
    # print("\n\n\n", data)
    username = data['username']
    password = data['password']
    
    # print(user.username)
    # print(user.password)
    user = User.objects.get(username=username)
    profile = Profile.objects.get(username = username)
    role = profile.role
    data = {
        "role" : role,
        "password" : data
    }
    # print(data['role'])
    if user.check_password(password):
        return Response(data['role'])
    else:
        return Response(response.error.data)
    # return Response(data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getTasks(request):
    user = request.user.profile
    if user.role == "Supplier":
        
        tasks = Task.objects.filter(owner = user)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    elif user.role == "Agency":
       
        tasks = Task.objects.filter(owner = user)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    elif user.role == "Customer":
        
        tasks = Task.objects.filter(owner = user)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    elif user.role == "Worker":
       
        tasks = Task.objects.filter(owner = user)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    else:
        
        tasks = Task.objects.filter(owner = user)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addTask(request):
    print(request.headers)
    user = request.user.profile
    data = request.data
    print(data)
    task = Task.objects.create(
        owner = user,
        role = Role.objects.get(name=user.role),
        # owner. = data['user'],
        name = data['taskname'],
        description = data['description'],
        date = data['datetime'].split("T")[0],
        time = data['datetime'].split("T")[1]
    )
    # print(data['datetime'].split("T")[0])
    serializer = TaskSerializer(task, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getGadgets(request):
    user = request.user.agency
    # if user.role == "Agency" :  
    gadgets = Premise.objects.filter(agency = user)
    serializer = PremiseSerializer(gadgets, many=True)
    return Response(serializer.data)
    # else: 
    #     return Response({"message" : "You are not authorised person or admin user"})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addGadget(request):
    print(request.headers)
    agency = request.user.agency
    # if user.role == "Agency":
    data = request.data
    print(data)
    gadget = Premise.objects.create(
        agency = agency,
        # role = Role.objects.get(name=request.user.role),
        # owner. = data['user'],
        itemName = data['gadgetName'],
        premiseImage = data['gadgetImage'],
        price = data['price'],
        orderstatus = data['orderStatus'],
        timeDuration = data['timeDuration'],
        # date = data['datetime'].split("T")[0],
        # time = data['datetime'].split("T")[1]
        )
    print(gadget)
    gadget.save()

    # else:
    #      return Response({"message" : "You are not authorised person"})
    # print(data['datetime'].split("T")[0])
    serializer = PremiseSerializer(gadget, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getGarments(request):
    user = request.user.supplier
    print(request.user.supplier)
    # if user.role == "Supplier" :
        # supplier = user
    garments = Garment.objects.filter(supplier = user)
    serializer = GarmentSerializer(garments, many=True)
    return Response(serializer.data)
    # else: 
    #     return Response({"message" : "You are not authorised person or admin user to list garments"})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addGarment(request):
    print(request.headers)
    user = request.user.supplier
    # if user.role == "Supplier":
    data = request.data
    print("garment data ::: ",data)
    garment = Garment.objects.create(
        supplier = user,
        garmentName = data['garmentName'],
        garmentImage = data['garmentImage'],
        price = data['price'],
        orderstatus = OrderStatus.objects.get(name = data['orderStatus']),
        # timeDuration = datetim e.timedelta.objects.get(data['timeDuration'])
    )
    day =data['timeDuration'].split('')[0],
    hours = data['timeDuration'].split('')[1]
    # timeduration =  datetime.timedelta(days= data['timeDuration'].split('days')[0], hours=data['timeDuration'].split('days')[1].split('hours')[0])
    print(garment.orderstatus, type(garment.orderstatus))
    print(type(garment.timeDuration))
    print(day, type(day))
    print(hours, type(hours))
    garment.save()
    # else:
    #     return Response({"message" : "You are not authorised person or admin user to add garment"})
    # print(data['datetime'].split("T")[0])
    serializer = GarmentSerializer(garment, many=False)
    return Response(serializer.data)




class SupplierView(APIView):
    # permission_classes=[IsAuthenticated]

    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def getSuppliers(request):
        user = request.user.profile
        # user = Profile.objects.get( username = user.username)
        print("user:: ", user)
        if user.role != 'Supplier':
            suppliers = Supplier.objects.all()
            serializer = SupplierProfileSerializer(suppliers, many=True)
            value = json.dumps(serializer.data)
            print("\n-====------------\t",value,"\n------", dict(serializer.data[0]))
            return Response(serializer.data)
        else:
            return Response({'message' : 'Sorry, You can\'t view Suppliers List because you are not owner nor permitted user'})

    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def getSupplier(request, pk):
        user = request.user.profile
        if user.role != "Supplier":
            supplier = Supplier.objects.get(id=pk)
            serializer = SupplierProfileSerializer(supplier, many=False)
            # print("supplier:---", supplier, "pk:--",pk )
            return Response(serializer.data)

    @api_view(['PUT'])
    @permission_classes([IsAuthenticated])
    def editSupplier(request, pk):
        # print("=-=-here-=-=")
        # print(request.data)
        data = request.data
        # data = list(request.data.items())
        print(type(data['profileImage']),data['profileImage'])
        print("data",type(data['mobileNo']))
        supplier = Supplier.objects.get(id=pk)
        print("=-=-supp",supplier)
        filename= os.path.basename(data['profileImage'])
        
        supplier.username = data['username'],
        supplier.email = data['email'],
        supplier.name = data['fullname'],
        supplier.mobileNo = data['mobileNo'],
        supplier.organisationName = data['organizationName'],
        supplier.organisationAddress =  data['organizationAddress'],
        # supplier.profile_image = `./{data['profileImage']}`,
        supplier.location = data['location'],
        supplier.social_website =  data['socialWebsite'],
        # print(os.path.abspath(f"{filename}"))
        # print(os.path.relpath("./src/static"))
        # p = pathlib.Path(filename)
        # print(os.path.abspath(p))

        # with open(os.path.abspath(p),"rb") as file:
        #     supplier.profile_image.save(filename,File(file),save=False)

        supplier.save()

        serializer = SupplierProfileSerializer(supplier, many=False)
        print("supplier:---", supplier, "pk:--",pk )
        print("=-=-seri",serializer.data)
        return Response(serializer.data)

    @api_view(['GET'])
    @permission_classes([IsAuthenticated, IsAdminUser])
    def getSupplierTasks(request, pk):
        user = request.user
        supplier = Supplier.objects.get(id=pk)
        tasks = Task.objects.filter(owner = supplier)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def getSupplierBills(request, pk):
        user = request.user
        supplier = Supplier.objects.get(id=pk)
        bills = Billing.objects.filter(owner = supplier)
        serializer = BillingSerializer(bills, many=True)
        return Response(serializer.data)

    @api_view(['GET'])
    @permission_classes([IsAuthenticated, IsAdminUser])
    def getSupplierTask(request, pk, pk1):
        user = request.user
        supplier = Supplier.objects.get(id=pk)
        task = Task.objects.get(id=pk1, owner=supplier)
        serializer = TaskSerializer(task, many=False)
        return Response(serializer.data)

    @api_view(['GET'])
    @permission_classes([IsAuthenticated, IsAdminUser])
    def getSupplierBill(request, pk, pk1):
        user = request.user
        supplier = Supplier.objects.get(id=pk)
        bill = Billing.objects.get(id=pk1, owner=supplier)
        serializer = BillingSerializer(bill, many=True)
        return Response(serializer.data)

class AgencyView(APIView):

    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def getAgencies(request):
        user = request.user.profile
        if user.role != 'Agency':
            agencies = Agency.objects.all()
            serializer = AgencyProfileSerializer(agencies, many=True)
            return Response(serializer.data)
        else:
            return Response({'message' : 'Sorry, You can\'t view Agencies List because you are not owner nor permitted user'})

    @api_view(['GET'])
    @permission_classes([IsAuthenticated, IsAdminUser])
    def getAgency(request, pk):
        user = request.user.profile
        if user.role != "Agency":
            agency = Agency.objects.get(id=pk)
            serializer = AgencyProfileSerializer(agency, many=False)
            return Response(serializer.data)

    @api_view(['GET'])
    @permission_classes([IsAuthenticated, IsAdminUser])
    def getAgencyTasks(request, pk):
        user = request.user
        agency = Agency.objects.get(id=pk)
        tasks = Task.objects.filter(owner = agency)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def getAgencyBills(request, pk):
        user = request.user
        agency = Agency.objects.get(id=pk)
        bills = Billing.objects.filter(owner = agency)
        serializer = BillingSerializer(bills, many=True)
        return Response(serializer.data)

    @api_view(['GET'])
    @permission_classes([IsAuthenticated, IsAdminUser])
    def getAgencyTask(request, pk, pk1):
        user = request.user
        agency = Agency.objects.get(id=pk)
        task = Task.objects.get(id=pk1, owner=agency)
        serializer = TaskSerializer(task, many=True)
        return Response(serializer.data)

    @api_view(['GET'])
    @permission_classes([IsAuthenticated, IsAdminUser])
    def getAgencyBill(request, pk, pk1):
        user = request.user
        agency = Agency.objects.get(id=pk)
        bill = Billing.objects.get(id=pk1, owner=agency)
        serializer = BillingSerializer(bill, many=True)
        return Response(serializer.data)


class CustomerView(APIView):

    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def getCustomers(request):
        user = request.user.profile
        if user.role != 'Customer':
            customers = Customer.objects.all()
            serializer = CustomerProfileSerializer(customers, many=True)
            return Response(serializer.data)
        else:
            return Response({'message' : 'Sorry, You can\'t view Customers List because you are not owner nor permitted user'})

    @api_view(['GET'])
    @permission_classes([IsAuthenticated, IsAdminUser])
    def getCustomer(request,pk):
        user = request.user.profile
        if user.role != "Customer":
            customer = Customer.objects.get(id=pk)
            serializer = CustomerProfileSerializer(customer, many=False)
            return Response(serializer.data)

    @api_view(['GET'])
    @permission_classes([IsAuthenticated, IsAdminUser])
    def getCustomerTasks(request, pk):
        user = request.user
        customer = Customer.objects.get(id=pk)
        tasks = Task.objects.filter(owner = customer)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def getCustomerBills(request, pk):
        user = request.user
        customer = Customer.objects.get(id=pk)
        bills = Billing.objects.filter(owner = customer)
        serializer = BillingSerializer(bills, many=True)
        return Response(serializer.data)

    @api_view(['GET'])
    @permission_classes([IsAuthenticated, IsAdminUser])
    def getCustomerTask(request, pk, pk1):
        user = request.user
        customer = Customer.objects.get(id=pk)
        task = Task.objects.get(id=pk1, owner=customer)
        serializer = TaskSerializer(task, many=True)
        return Response(serializer.data)

    @api_view(['GET'])
    @permission_classes([IsAuthenticated, IsAdminUser])
    def getCustomerBill(request, pk, pk1):
        user = request.user
        customer = Customer.objects.get(id=pk)
        bill = Billing.objects.get(id=pk1, owner=customer)
        serializer = BillingSerializer(bill, many=True)
        return Response(serializer.data)

class WorkerView(APIView):

    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def getWorkers(request):
        user = request.user.profile
        if user.role != 'Worker' :
            # profiles = Profile.objects.filter(role="Worker")
            workers = Worker.objects.all()
            serializer = WorkerProfileSerializer(workers, many=True)
            print(serializer.data)
            return Response(serializer.data)

    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def getWorker(request, pk):
        user = request.user.profile
        if user.role != "Worker":
            worker = Worker.objects.get(id=pk)
            serializer = WorkerProfileSerializer(worker, many=False)

            print("\n\n\n get worker call:---", worker, "\n\nid:---", pk)
            return Response(serializer.data)
        

    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def getWorkerTasks(request, pk):
        user = request.user
        worker = Worker.objects.get(id=pk)
        tasks = Task.objects.filter(owner = worker)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    # @api_view(['GET'])
    # @permission_classes([IsAuthenticated])
    # def getWorkerBills(request, pk):
    #     user = request.user
    #     worker = Worker.objects.get(id=pk)
    #     bills = Billing.objects.filter(owner = worker)
    #     serializer = BillingSerializer(bills, many=True)
    #     return Response(serializer.data)

    # @api_view(['GET'])
    # @permission_classes([IsAuthenticated, IsAdminUser])
    # def getWorkerTask(request, pk, pk1):
    #     user = request.user
    #     worker = Worker.objects.get(id=pk)
    #     task = Task.objects.get(id=pk1, owner=worker)
    #     serializer = TaskSerializer(task, many=True)
    #     return Response(serializer.data)

    # @api_view(['GET'])
    # @permission_classes([IsAuthenticated, IsAdminUser])
    # def getWorkerBill(request, pk, pk1):
    #     user = request.user
    #     worker = Worker.objects.get(id=pk)
    #     bill = Billing.objects.get(id=pk1, owner=worker)
    #     serializer = BillingSerializer(bill, many=True)
    #     return Response(serializer.data)


class TaskViewSet(viewsets.ModelViewSet):
    """" This is for model viewse class of tasks """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    # def getTasks(self, request , *args, **kwargs):
    #     user = request.user.profile
    #     if user.role == "Supplier":
    #         tasks = Task.objects.filter(role = "Supplier")
    #         serializer = TaskSerializer(tasks, many=True)
    #         return Response(serializer.data)

class ModelView(APIView):
    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def getModels(request):
        user = request.user.profile
        if user.role != 'Model':
            models = Actor.objects.all()
            serializer = ActorProfileSerializer(models, many=True)
            return Response(serializer.data)

    # @api_view(['POST'])
    # @permission_classes([IsAuthenticated])
    # def addModel(request):
    #     print(request.headers)
    #     user = request.user.profile
    #     if user.role == "Supplier":
    #         data = request.data
    #         print(data)
    #         garment = Garment.objects.create(
    #             supplier = user,
    #             # role = Role.objects.get(name=request.user.role),
    #             # owner. = data['user'],
    #             garmentName = data['gadgetName'],
    #             garmentImage = data['gadgetImage'],
    #             price = data['price'],
    #             orderstatus = data['orderStatus'],
    #             timeDuration = data['timeDuration'],
    #                 # date = data['datetime'].split("T")[0],
    #             # time = data['datetime'].split("T")[1]
    #         )
    #         print(garment)
    #         garment.save()
    #     # print(data['datetime'].split("T")[0])
    #     serializer = GarmentSerializer(garment, many=False)
    #     return Response(serializer.data)

class PhotoPosterView(APIView):
    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def getPhotoPosters(request):
        user = request.user.profile

        photposters = PhotoPoster.objects.all()
        serializer = PhotoPosterSerializer(photposters, many=True)
        return Response(serializer.data)


