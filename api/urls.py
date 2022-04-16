from django.urls import path,include

from api.views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView
)
from api import views
from rest_framework.routers import DefaultRouter
# import urlpatterns
router = DefaultRouter()

router.register('task', views.TaskViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('users/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('Users/', getUsers),
    path('Users/<str:pk>/', getUser),
    path('register/',UserRegistrationViewSet),
    path('login/',UserLoginViewSet),
    path('MyTasks/',getTasks),
    path('addTask/', addTask),

    path('Suppliers/', Supplier.getSuppliers),
    path('Agencies/', Agency.getAgencies),
    path('Customers/', Customer.getCustomers),
    path('Workers/', Worker.getWorkers),

    path('Users/Suppliers/<str:pk>', Supplier.getSupplier),
    path('Users/Agencies/<str:pk>', Agency.getAgency),
    path('Users/Customers/<str:pk>', Customer.getCustomer),
    path('Users/Workers/<str:pk>', Worker.getWorker),

    # path('Users/Suppliers/<str:pk>/Tasks/', Supplier.getSupplierTasks),
    # path('Users/Agencies/<str:pk>/Tasks/', Agency.getAgencyTasks),
    # path('Users/Customers/<str:pk>/Tasks/', Customer.getCustomerTasks),
    # path('Users/Workers/<str:pk>/Tasks/', Worker.getWorkerTasks),

    path('Users/Suppliers/<str:pk>/Tasks/<str:pk1>/', Supplier.getSupplierTask),
    path('Users/Agencies/<str:pk>/Tasks/<str:pk1>/', Agency.getAgencyTask),
    path('Users/Customers/<str:pk>/Tasks/<str:pk1>/', Customer.getCustomerTask),
    path('Users/Workers/<str:pk>/Tasks/<str:pk1>/', Worker.getWorkerTask),

    path('Users/Suppliers/<str:pk>/Bills/', Supplier.getSupplierBills),
    path('Users/Agencies/<str:pk>/Bills/', Agency.getAgencyBills),
    path('Users/Customers/<str:pk>/Bills/', Customer.getCustomerBills),
    path('Users/Workers/<str:pk>/Bills/', Worker.getWorkerBills),

    path('Users/Suppliers/<str:pk>/Bills/<str:pk1>/', Supplier.getSupplierBill),
    path('Users/Agencies/<str:pk>/Bills/<str:pk1>/', Agency.getAgencyBill),
    path('Users/Customers/<str:pk>/Bills/<str:pk1>/', Customer.getCustomerBill),
    path('Users/Workers/<str:pk>/Bills/<str:pk1>/', Worker.getWorkerBill),

]