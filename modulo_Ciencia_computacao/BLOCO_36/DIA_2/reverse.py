def reverse_iterativo(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
    return reversed_list


def reverse(list):
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [list[0]]


print(reverse([3, 2, 1]))
print(reverse_iterativo([1, 2, 3]))
