# accounts/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import CustomUserSerializer


@api_view(['POST'])
def register_user(request):
    serializer = CustomUserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User registered successfully!"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


from django.contrib.auth.hashers import check_password
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import CustomUser
from django.contrib.auth import login

@api_view(['POST'])
def signin_user(request):
    email = request.data.get('email')
    password = request.data.get('password')

    try:
        # Check if user exists
        user = CustomUser.objects.get(email=email)
        if check_password(password, user.password):  # Validate password
            return Response({"message": "Sign in successful!"}, status=status.HTTP_200_OK)
        else:
            return Response({"detail": "Invalid password."}, status=status.HTTP_401_UNAUTHORIZED)
    except CustomUser.DoesNotExist:
        return Response({"detail": "User not found."}, status=status.HTTP_404_NOT_FOUND)


from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from .models import Movie, Rating
import json

@csrf_exempt 
def rate_movie(request):
    if request.method == 'POST':
        data = json.loads(request.body)# if not movie_id else request.POST
        print(data)
        email = data.get("email")
        movie_name = data.get('movie_name')# if not movie_id else data.get('movie_id') 
        rating_value = data['rating']
        
        # Fetch the movie object either by name or ID
        movie = get_object_or_404(Movie, name=movie_name)
        user = get_object_or_404(CustomUser, email=email)
        
        

        # Update or create the rating
        rating, created = Rating.objects.update_or_create(
                    user=user,
                    movie=movie,
                    defaults={'rating': rating_value}
        )
        
        return JsonResponse({"message": "Rating updated successfully"})
    return JsonResponse({"error": "Invalid request"}, status=400)



import logging
from django.shortcuts import render, get_object_or_404

logger = logging.getLogger(__name__)

def submit_rating(request, movie_id):
    if request.method == 'POST':
        movie = get_object_or_404(Movie, id=movie_id)
        try:
            rating_value = int(request.POST.get('rating'))
            if 1 <= rating_value <= 5:
                rating, created = Rating.objects.update_or_create(
                    user=request.user,
                    movie=movie,
                    defaults={'rating': rating_value}
                )
                return JsonResponse({'message': 'Rating saved successfully'})
            else:
                return JsonResponse({'error': 'Rating must be between 1 and 5'}, status=400)
        except (ValueError, TypeError) as e:
            logger.error(f"Error: {e}")
            return JsonResponse({'error': 'Invalid rating value'}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=400)

@csrf_exempt
def get_rating(request):
    
    if request.method == 'GET':
        
        #movie = get_object_or_404(Movie, id=movie_id)
        try:
            email = request.GET.get("email")
            movie_name = request.GET.get('movie_name')
            print("getting rate from js")
    
            # Fetch the movie object either by name or ID
            #movie = get_object_or_404(Movie, name=movie_name)
            # user = get_object_or_404(CustomUser, email=email)
            movie = Movie.objects.filter(name=movie_name)
            user = CustomUser.objects.filter(email=email)
            print(movie,user)
            rating = Rating.objects.filter(movie=movie[0],user=user[0])
            if len(rating) > 0:
                print(rating[0])
                return JsonResponse({'rating': rating[0].rating},status=200)
            else:
                return JsonResponse({'message':'unable to get'},status=503)
            
        except (ValueError, TypeError) as e:
            logger.error(f"Error: {e}")
            return JsonResponse({'error': 'Invalid rating value'}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=400)


@api_view(['POST'])
def logout_user(request):
    request.session.flush()
    return Response({"message": "User logged out successfully!"}, status=status.HTTP_200_OK)
