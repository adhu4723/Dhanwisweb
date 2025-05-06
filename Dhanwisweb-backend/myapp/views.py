from django.shortcuts import render

from myapp.serializers import PortfolioSerializer

from myapp.models import Portfolio

from rest_framework.response import Response

from rest_framework.views import APIView



class PortfolioCreateListApiView(APIView):

    def get(self,request,*args,**kwargs):

        qs=Portfolio.objects.all()

        serialiser_instance=PortfolioSerializer(qs,many=True)

        return Response(data=serialiser_instance.data)
    
    def post(self,request,*args,**kwargs):

        pass




