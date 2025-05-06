from django.db import models

from django.db import models


class Portfolio(models.Model):
    
    project_name=models.CharField(max_length=200)

    image=models.ImageField(upload_to="project_pic",default="project_pic/default")

    link=models.CharField(max_length=300)

    project_discription=models.CharField(max_length=500)

    def __str__(self):
        return self.project_name

class Jobs(models.Model):

    job_options=(
        ("Python developer","pythondeveloper"),
        ("mearn stack","mearnstack"),
        ("digital marketing","digitalmarketing"),
        ("graphic design","graphicdesign")
    )

    job=models.CharField(max_length=200,choices=job_options,default="python developer")

class Career(models.Model):

    job_object = models.ForeignKey(Jobs, on_delete=models.CASCADE)

    discription=models.CharField(max_length=500)

    created_date=models.DateTimeField(auto_now_add=True)

    updated_date=models.DateTimeField(auto_now=True)


