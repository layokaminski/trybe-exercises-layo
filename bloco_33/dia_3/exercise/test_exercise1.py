from exercise1 import fizzBuzz


def test_fizzBuzz():
    response = fizzBuzz([1, 3, 5, 15])
    assert [1, 'Fizz', 'Buzz', 'FizzBuzz'] == response
