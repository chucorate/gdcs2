---
draft: true
title: Sorting Algorithms
weight: 9110
date: 2024-09-30T00:00:00.000Z
description: Description here
tags:
  - Grade 3
  - Applied Math & Algorithms
seo:
  title: null
  description: null
  canonical: ""
  noindex: false
math: true
---
# 1: Introduction


### What is a sorting algorithm?


A sorting algorithm is a **function** that takes in a **list/array** and **sorts** the items inside numerically from least to greatest/greatest to least. 


Sorting algorithms are incredibly useful when dealing with **large amounts of data** that have a certain priority to the items inside. For example, in 3D engines, triangles are drawn from **farthest to closest**. *(this does not apply to techniques such as raytracing)* If the triangles were left unsorted, tris farther away can render on top of tris closer to the camera. To combat this, engines will **sort the tris based off of their Z position**, sorting from least to greatest. Other uses include **pathfinding/AI**, where nodes need to be sorted by their **priority** in what's commonly called an **"open list" or "frontier"** to determine where to move next.


Sorting algorithms are also used in many applications that deal with parsing through and retrieving information from large datasets. 


## List structure:


In this guide, I will be using a **simple dynamic array** structure that has 1000 addresses. Your structure **does not** need to include that many, but to showcase performance and speed, I will be using this structure.


If you need a refresher on how to make a dynamic array structure, you can follow along here, otherwise you can skip to the algorithms.


# 2: Sorting Algorithms


## Algorithm 1: Bubble Sort


Out of the 5 algorithms listed in this guide, this is the **easiest one conceptually and to implement**. It is commonly used for educational purposes due to its high learnability, and small datasets (1-20) as the performance increase from faster algorithms are negligible.


Bubble Sort works by **repeatedly swapping adjacent elements** if they are in the wrong order. The algorithm makes multiple passes through the array, ignoring sorted values. 


Bubble Sort is useful for when the **data set is minimal** as larger arrays **significantly increase computational time.**


The time complexity is listed below:


* Best: `O(n)` 
* Average: `O(n^2)` 
* Worst: `O(n^2)`


### Implementation


## Algorithm 2: Selection Sort:


Selection Sort is a **comparison based algorithm**, the second easiest in this guide. Commonly used for **small data sets** and in situations where memory is limited due to the fact that it’s an in **place sorting algorithm.**


Selection Sort works by finding the **smallest element in the array, swapping it with its current item, the pointer moving to the next element in the array.** This repeats until the full array has been sorted. 
Like Bubble Sort, Selection Sort is useful for small data sets as computational time significantly increases as the array increases.


The time complexity is listed below:


* Best: `O(n^2)`
* Average: `O(n^2` 
* Worst: `O(n^2)`


### Implementation


## Algorithm 3: Merge Sort


Merge Sort is a very popular sorting algorithm due to its efficiency and stability. Used for large datasets and when memory is not an issue. 


Merge Sort works by **splitting** the array into **smaller arrays**, dividing the arrays in half until it can no longer be divided. It then **sorts each subarray** in pairs using the Merge Sort algorithm and **merges** the subarrays, repeating the process until the array is fully sorted. *(Confused? Don’t worry, I was too when learning this.)* There are two implementations of the Merge Sort algorithm, the **Top Down** approach and the **Bottom Up** approach, the Bottom Up approach being the one we are implementing here.


#### Bottom-Up Approach


We begin with our array of values. `[0,8,6,4,9,3,4,2]` We are going to imagine that each individual item in this array is its **own subarray** `[[0],[8],[6],[4],[9],[3],[4],[2]]` We are now going to **take each adjacent pair of subarrays and sort them**.


```
0,8 → 0,8
6,4 → 4,6
9,3 → 3,9
4,2 → 2,4
```


Now, we are going to **merge** the subarrays one layer. `[[0,8],[4,6],[3,9],[2,4]]`


Now that we have this new array, we are going to sort the adjacent list again, comparing the first item in the first array with each item in the second array, moving the smaller value into another array:


```
[0,8] + [4,6] → [8] + [4,6] → [8] + [6] → [8]    →    [] 
[]              [0]           [0,4]       [0,4,6]     [0,4,6,8]  


[3,9] + [2,4] → [3,9] + [4] → [9] + [4] -> [9]   →    []
[]              [2]           [2,3]        [2,3,4]    [2,3,4,9]    
```


Now we **repeat** the process 1 more time, **merging** `[0,4,6,8]` and `[2,3,4,9]` together:


```
[0,4,6,8] + [2,3,4,9] → [4,6,8] + [2,3,4,9] → [4,6,8] + [3,4,9] → [4,6,8] + [4,9] →  
[]                      [0]                   [0,2]               [0,2,3]       
           
[6,8] + [4,9] → [6,8] + [9] → [8] + [9]    →    [9]         →         []
[0,2,3,4]       [0,2,3,4,4]   [0,2,3,4,4,6]     [0,2,3,4,4,6,8]       [0,2,3,4,4,6,8,9]


```




**Remember**, Merge sort **never rearranges elements** inside a subarray, it only **merges already-sorted subarrays.**




Because of its **efficiency**, merge sort is a **very popular algorithm**, often used for large data sets.


The time complexity is listed below:


* Overall: `O(n log n)`
### Implementation


## Algorithm 4: Counting Sort


### Implementation


## Algorithm 5: Radix Sort


# Summary


{{< callout context="note" title="TLDR - What this guide covers" icon="outline/info-circle" >}}



-



{{< /callout >}}

- - -
