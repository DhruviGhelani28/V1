import email
from pickle import TRUE
import profile
from urllib import request
from django.shortcuts import render
from pandas import describe_option
from .models import *
from .serializers import *
from rest_framework.views import APIView
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
   
@api_view(['POST'])
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

    if (data['role'] == 'Supplier'):
        supplier = Supplier.objects.create(
            supplier = user,
            username = user.username,
            email = user.email,
            name = data['fullname']
        )
        supplier.save()

    elif(data['role'] == 'Agency'):
        agency= Agency.objects.create(
            agency = user,
            username = user.username,
            email = user.email,
            name = data['fullname']
        )
        agency.save()
    elif(data['role'] == 'Customer'):
        customer = Customer.objects.create(
            customer = user,
            username = user.username,
            email = user.email,
            name = data['fullname']
        )
        customer.save()
    else:
        worker = Worker.objects.create(
            worker = profile,
            username = profile.username,
            email = profile.email,
            name = data['fullname']
        )
        worker.save()
    serializer = UserSerializer(user, many = False)
    return Response(serializer.data)

@api_view(['POST'])
@csrf_exempt
@permission_classes([IsAuthenticated])
def UserLoginViewSet(request):
    # user = request.user
    # print("\n\nLogin")
    data = request.data
    
    print("\n\n\n", data)
    username = data['username']
    password = data['password']
    
    # print(user.username)
    # print(user.password)
    user = User.objects.get(username=username)

    if user.check_password(password):
        return Response({'mess': "You are logined succesfully"})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getTasks(request ):
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
# @permission_classes([IsAuthenticated])
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

class Supplier(APIView):
    # permission_classes=[IsAuthenticated]

    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def getSuppliers(request):
        user = request.user.profile
        if user.role != 'Supplier':
            suppliers = Profile.objects.filter(role="Supplier")
            serializer = SupplierProfileSerializer(suppliers, many=True)
            return Response(serializer.data)
        else:
            return Response({'message' : 'Sorry, You can\'t view Suppliers List because you are not owner nor permitted user'})

    @api_view(['GET'])
    @permission_classes([IsAuthenticated, IsAdminUser])
    def getSupplier(request, pk):
        user = request.user.profile
        if user.role != "Supplier":
            supplier = Supplier.objects.get(id=pk)
            serializer = SupplierProfileSerializer(supplier, many=False)
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

class Agency(APIView):

    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def getAgencies(request):
        user = request.user.profile
        if user.role != 'Agency':
            agencies = Profile.objects.filter(role="Agency")
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


class Customer(APIView):

    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def getCustomers(request):
        user = request.user.profile
        if user.role != 'Customer':
            customers = Profile.objects.filter(role="Customer")
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

class Worker(APIView):

    @api_view(['GET'])
    @permission_classes([IsAuthenticated])
    def getWorkers(request):
        user = request.user.profile
        workers = Profile.objects.filter(role="Worker")
        serializer = WorkerProfileSerializer(workers, many=True)
        return Response(serializer.data)

    @api_view(['GET'])
    @permission_classes([IsAuthenticated, IsAdminUser])
    def getWorker(request, pk):
        user = request.user.profile
        if user.role != "Worker":
            worker = Worker.objects.get(id=pk)
            serializer = WorkerProfileSerializer(worker, many=False)
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
    @permission_classes([IsAuthenticated])
    def getWorkerBills(request, pk):
        user = request.user
        worker = Worker.objects.get(id=pk)
        bills = Billing.objects.filter(owner = worker)
        serializer = BillingSerializer(bills, many=True)
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
    def getWorkerBill(request, pk, pk1):
        user = request.user
        worker = Worker.objects.get(id=pk)
        bill = Billing.objects.get(id=pk1, owner=worker)
        serializer = BillingSerializer(bill, many=True)
        return Response(serializer.data)


class TaskViewSet(viewsets.ModelViewSet):
    """" This is for model viewse calss of taks """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    # def getTasks(self, request , *args, **kwargs):
    #     user = request.user.profile
    #     if user.role == "Supplier":
    #         tasks = Task.objects.filter(role = "Supplier")
    #         serializer = TaskSerializer(tasks, many=True)
    #         return Response(serializer.data)
