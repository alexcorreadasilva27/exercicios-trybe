class conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __str__(self):
        string = "{"

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "
        string += "}"
        return string

    def __contains__(self, item):
        return self.set[item]

    def union(self, conjuntoB):
        new_conjuto = conjunto()

        for index in range(1001):
            if self.set[index] or conjuntoB.set[index]:
                new_conjuto.add(index)
        return new_conjuto

    def intersection(self, conjuntoB):
        new_conjuto = conjunto()

        for index in range(1001):
            if self.set[index] and conjuntoB.set[index]:
                new_conjuto.add(index)
        return new_conjuto


if __name__ == "__main__":
    print("-----conjunto1---------")
    conj = conjunto()
    for item in [0, 10, 100, 1000]:
        conj.add(item)
    print(conj, "\n")

    print("-----conjunto2---------")
    conj2 = conjunto()
    for item in [1, 2, 3]:
        conj2.add(item)
    print(conj2)
    print(1 in conj2)
    print(0 in conj2, "\n")
    print("-----conjunto3---------")

    conj3 = conjunto()
    for item in [7, 2, 10]:
        conj3.add(item)
    print(conj3, "\n")
    print("-----conjunto4---------")

    conj4 = conjunto()
    print(conj4, "\n")

    print("-----conjunto5---------")
    conj5 = conj.union(conj2)
    conj6 = conj5.union(conj3)
    conj7 = conj.intersection(conj3)
    conj8 = conj5.intersection(conj4)
    print(conj5, "\n")
    print("-----conjunto6---------")
    print(conj6, "\n")
    print("-----conjunto7---------")
    print(conj7, "\n")
    print("-----conjunto8---------")
    print(conj8)
