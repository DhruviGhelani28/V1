from django.urls import path,include

from api.views import *
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView
# )
from api import views
from rest_framework.routers import DefaultRouter
# import urlpatterns
router = DefaultRouter()

router.register('task', views.TaskViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('users/token/', TokenObtainPairView.post, name='token_obtain_pair'),
    path('Users/', getUsers),
    path('Users/<str:pk>/', getUser),
    path('register/',UserRegistrationViewSet),
    # path('supplierCreate/', )
    path('login/',UserLoginViewSet),
    path('MyTasks/',getTasks),
    path('addTask/', addTask),
    path('MyGadgets/', getGadgets),
    path('AddGadget/', addGadget),
    path('MyGarments/', getGarments),
    path('AddGarment/', addGarment),
    path('PhotoPosters/',PhotoPosterView.getPhotoPosters),
    path('Models/', ModelView.getModels),

    path('Suppliers/', SupplierView.getSuppliers),
    path('Agencies/', AgencyView.getAgencies),
    path('Customers/', CustomerView.getCustomers),
    path('Workers/', WorkerView.getWorkers),

    path('Users/Suppliers/<str:pk>', SupplierView.getSupplier),
    path('Users/Agencies/<str:pk>', AgencyView.getAgency),
    path('Users/Customers/<str:pk>', CustomerView.getCustomer),
    path('Users/Workers/<str:pk>', WorkerView.getWorker),

    # path('Users/Suppliers/<str:pk>/Tasks/', Supplier.getSupplierTasks),
    # path('Users/Agencies/<str:pk>/Tasks/', Agency.getAgencyTasks),
    # path('Users/Customers/<str:pk>/Tasks/', Customer.getCustomerTasks),
    # path('Users/Workers/<str:pk>/Tasks/', Worker.getWorkerTasks),

    path('Users/Suppliers/<str:pk>/Tasks/<str:pk1>/', SupplierView.getSupplierTask),
    path('Users/Agencies/<str:pk>/Tasks/<str:pk1>/', AgencyView.getAgencyTask),
    path('Users/Customers/<str:pk>/Tasks/<str:pk1>/', CustomerView.getCustomerTask),
    # path('Users/Workers/<str:pk>/Tasks/<str:pk1>/', WorkerView.getWorkerTask),

    path('Users/Suppliers/<str:pk>/Bills/', SupplierView.getSupplierBills),
    path('Users/Agencies/<str:pk>/Bills/', AgencyView.getAgencyBills),
    path('Users/Customers/<str:pk>/Bills/', CustomerView.getCustomerBills),
    # path('Users/Workers/<str:pk>/Bills/', WorkerView.getWorkerBills),

    path('Users/Suppliers/<str:pk>/Bills/<str:pk1>/', SupplierView.getSupplierBill),
    path('Users/Agencies/<str:pk>/Bills/<str:pk1>/', AgencyView.getAgencyBill),
    path('Users/Customers/<str:pk>/Bills/<str:pk1>/', CustomerView.getCustomerBill),
    # path('Users/Workers/<str:pk>/Bills/<str:pk1>/', WorkerView.getWorkerBill),

    path('Users/Suppliers/Edit/<str:pk>', SupplierView.editSupplier),
    # path('Users/Agencies/Edit/<str:pk>', AgencyView.editAgency),
    # path('Users/Customers/Edit/<str:pk>', CustomerView.editCustomer),
    # path('Users/Workers/Edit/<str:pk>', WorkerView.editWorker),

]