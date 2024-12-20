from django.db import models

# Create your models here.

class CustomUser(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)  # Hashed password

    def __str__(self):
        return self.name



class Movie(models.Model):
    name = models.CharField(max_length=255)
    year_duration = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.name

class Rating(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    rating = models.IntegerField()

    def __str__(self):
        return f"{self.user.name} - {self.movie.name} - {self.rating}"
