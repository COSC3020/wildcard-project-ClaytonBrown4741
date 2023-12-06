[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13156505&assignment_repo_type=AssignmentRepo)
# Wildcard Project

You have a cool idea for an algorithms project? Use this repository. Make sure
to explain what problem you're solving and how you're doing it.  

**EXPLANATION:**  
Here is a program that I created for the wildcard assignemnt.  
The primary purpose of this code is to create random distance  
matrices to be used in conjuncture with my TSP Comparison assignment.  
When given a key (that being how big the matrix should  
be) the code will return a distance matrix with a few specifications.  
First of all, the routes from a city to itself will always be 0. In  
addition to this, in order to make sure that my Held-Karp algorithm  
is functioning properly, there will always be a *guaranteed* shortest  
path. This path will always be 1 minus the key size, so if the function  
is given a key value of 6, the shortest possible path will be 5. All  
other values will be completely random positive integers.  

The runtime for this code will obviously be $O(n^2)$ where n is the  
key size that was given. This is evident from looking at the code, as  
it is required to loop through each possible entry in the matrix and  
assign it a value. Because the number of entries in the distance matrix  
will be equal to n*n, that gives us a final runtime of $O(n^2)$
