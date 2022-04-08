from django.urls import path

from api.views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView
)

# import urlpatterns

urlpatterns = [
    path('users/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),

    path('Users/', getUsers),
    path('Users/<str:pk>/', getUser),

    path('Suppliers/', getSuppliers),
    path('Customers/', getCustomers),
    path('Agencies/', getAgencies),
    path('Workers/', getWorkers),

    path('Users/Suppliers/<str:pk>', getSupplier),
    path('Users/Agencies/<str:pk>', getAgency),
    path('Users/Customers/<str:pk>', getCustomer),
    path('Users/Workers/<str:pk>', getWorker),

    path('Users/Suppliers/<str:pk>/Tasks/', getSupplierTasks),
    path('Users/Agencies/<str:pk>/Tasks/', getAgencyTasks),
    path('Users/Customers/<str:pk>/Tasks/', getCustomerTasks),
    path('Users/Workers/<str:pk>/Tasks/', getWorkerTasks),

    path('Users/Suppliers/<str:pk>/Tasks/<str:pk1>/', getSupplierTask),
    path('Users/Agencies/<str:pk>/Tasks/<str:pk1>/', getAgencyTask),
    path('Users/Customers/<str:pk>/Tasks/<str:pk1>/', getCustomerTask),
    path('Users/Workers/<str:pk>/Tasks/<str:pk1>/', getWorkerTask),

    path('Users/Suppliers/<str:pk>/Bills/', getSupplierBills),
    path('Users/Agencies/<str:pk>/Bills/', getAgencyBills),
    path('Users/Customers/<str:pk>/Bills/', getCustomerBills),
    path('Users/Workers/<str:pk>/Bills/', getWorkerBills),

    path('Users/Suppliers/<str:pk>/Bills/<str:pk1>/', getSupplierBill),
    path('Users/Agencies/<str:pk>/Bills/<str:pk1>/', getAgencyBill),
    path('Users/Customers/<str:pk>/Bills/<str:pk1>/', getCustomerBill),
    path('Users/Workers/<str:pk>/Bills/<str:pk1>/', getWorkerBill),

    path('register/',UserRegistrationViewSet),
    path('login/',UserLoginViewSet),
]