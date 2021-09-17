from exercise2 import transform_frase


def test_transform_frase():
    response = transform_frase("ABCDEFGHIJKLMNO")
    assert "222333444555666" == response
