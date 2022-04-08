import email
import profile
from urllib import request
from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework import status, viewsets
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt

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

@api_view(['GET'])
@permission_classes([IsAuthenticated])
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

@api_view(['GET'])
# @permission_classes([IsAuthenticated, IsAdminUser])
def getSuppliers(request):
    user = request.user.profile
    if user.role != 'Supplier':
        suppliers = Profile.objects.filter(role="Supplier")
        serializer = SupplierProfileSerializer(suppliers, many=True)
        return Response(serializer.data)
    else:
        return Response({'message' : 'Sorry, You can\'t view Suppliers List because you are not owner nor permitted user'})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAgencies(request):
    user = request.user.profile
    if user.roll != 'Agency':
        agencies = Profile.objects.filter(role="Agency")
        serializer = AgencyProfileSerializer(agencies, many=True)
        return Response(serializer.data)
    else:
        return Response({'message' : 'Sorry, You can\'t view Agencies List because you are not owner nor permitted user'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getCustomers(request):
    user = request.user.profile
    if user.roll != 'Customer':
        customers = Profile.objects.filter(role="Customer")
        serializer = CustomerProfileSerializer(customers, many=True)
        return Response(serializer.data)
    else:
        return Response({'message' : 'Sorry, You can\'t view Customers List because you are not owner nor permitted user'})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getWorkers(request):
    user = request.user.profile
    workers = Profile.objects.filter(role="Worker")
    serializer = WorkerProfileSerializer(workers, many=True)
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
@permission_classes([IsAuthenticated, IsAdminUser])
def getAgencyTasks(request, pk):
    user = request.user
    agency = Agency.objects.get(id=pk)
    tasks = Task.objects.filter(owner = agency)
    serializer = TaskSerializer(tasks, many=True)
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
@permission_classes([IsAuthenticated, IsAdminUser])
def getWorkerTasks(request, pk):
    user = request.user
    worker = Worker.objects.get(id=pk)
    tasks = Task.objects.filter(owner = worker)
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def getSupplierBills(request, pk):
    user = request.user
    supplier = Supplier.objects.get(id=pk)
    bills = Billing.objects.filter(owner = supplier)
    serializer = BillingSerializer(bills, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def getAgencyBills(request, pk):
    user = request.user
    agency = Agency.objects.get(id=pk)
    bills = Billing.objects.filter(owner = agency)
    serializer = BillingSerializer(bills, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def getCustomerBills(request, pk):
    user = request.user
    customer = Customer.objects.get(id=pk)
    bills = Billing.objects.filter(owner = customer)
    serializer = BillingSerializer(bills, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def getWorkerBills(request, pk):
    user = request.user
    worker = Worker.objects.get(id=pk)
    bills = Billing.objects.filter(owner = worker)
    serializer = BillingSerializer(bills, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def getSupplier(request, pk):
    user = request.user
    supplier = Supplier.objects.get(id=pk)
    serializer = SupplierProfileSerializer(supplier, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def getAgency(request, pk):
    user = request.user
    agency = Agency.objects.get(id=pk)
    serializer = AgencyProfileSerializer(agency, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def getCustomer(request,pk):
    user = request.user
    customer = Customer.objects.get(id=pk)
    serializer = CustomerProfileSerializer(customer, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def getWorker(request, pk):
    user = request.user
    worker = Worker.objects.get(id=pk)
    serializer = WorkerProfileSerializer(worker, many=False)
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
def getAgencyTask(request, pk, pk1):
    user = request.user
    agency = Agency.objects.get(id=pk)
    task = Task.objects.get(id=pk1, owner=agency)
    serializer = TaskSerializer(task, many=True)
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
def getWorkerTask(request, pk, pk1):
    user = request.user
    worker = Worker.objects.get(id=pk)
    task = Task.objects.get(id=pk1, owner=worker)
    serializer = TaskSerializer(task, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def getSupplierBill(request, pk, pk1):
    user = request.user
    supplier = Supplier.objects.get(id=pk)
    bill = Billing.objects.get(id=pk1, owner=supplier)
    serializer = BillingSerializer(bill, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def getAgencyBill(request, pk, pk1):
    user = request.user
    agency = Agency.objects.get(id=pk)
    bill = Billing.objects.get(id=pk1, owner=agency)
    serializer = BillingSerializer(bill, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def getCustomerBill(request, pk, pk1):
    user = request.user
    customer = Customer.objects.get(id=pk)
    bill = Billing.objects.get(id=pk1, owner=customer)
    serializer = BillingSerializer(bill, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsAdminUser])
def getWorkerBill(request, pk, pk1):
    user = request.user
    worker = Worker.objects.get(id=pk)
    bill = Billing.objects.get(id=pk1, owner=worker)
    serializer = BillingSerializer(bill, many=True)
    return Response(serializer.data)
# @api_view(['GET'])
# @permission_classes([IsAuthenticated, IsAdminUser])
# def getTasks(request):
#     user = request.user
#     tasks = Task.objects.all()
#     serializer = TaskSerializer(tasks, many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# @permission_classes([IsAuthenticated, IsAdminUser])
# def getTasks(request):
#     user = request.user
#     tasks = Task.objects.all()
#     serializer = TaskSerializer(tasks, many=True)
#     return Response(serializer.data)
   
@api_view(['POST'])

# @permission_classes([IsAuthenticated])
def UserRegistrationViewSet(request):
    print("\n\nRegister")
    data = request.data['data']
    print("\n\n\n", data)
    # users = User.objects.all()
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
        role = data['roll']
    )
    print("Profile", profile)
    profile.save()
    serializer = UserSerializer(user, many = False)
    return Response(serializer.data)

@api_view(['POST'])
@csrf_exempt
def UserLoginViewSet(request):
    user = request.user
    print("\n\nLogin")
    data = request.data
    
    print("\n\n\n", data)
    username = data['username'],
    password = data['password']
    print(user.username)
    print(user.password)

    if username == user.username and password == user.password: 
        {
            print("login succesfully")
        }



# class UserRegistrationViewSet(viewsets.ModelViewSet, request):
#     data = request.data
#     serializer_class = UserRegistrationSerializer
#     # permission_classes = [IsAuthenticated, IsAdminUser]
#     # authentication_class = (TokenAuthentication)
#     queryset = User.objects.all()

    
# class LoginView(viewsets.ModelViewSet):
#     serializer_class = UserSerializer
#     data = request.data
#     username = data.get['username']
#     roll = data.get['roll']
#     password = data.get['password']

#     if username == 

# class LoginUserView(LoginView):
#     serializer_class = LoginSerializer
#     permission_classes = [AllowAny]

#     def post(self,request,*args,**kwargs):
#         serializer = AuthTokenSerializer(data = request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data['user']

#         _, token = AuthToken.objects.create(user)
#         return Response({
#             'user_Info':{
#                     'id':user.id,
#                     'username':user.username,
#                     'email':user.email,
#                     'first_name':user.first_name,
#                     'last_name':user.last_name,
#                     'is_superuser':user.is_superuser,
#             },
#             'token':token
#         })
#