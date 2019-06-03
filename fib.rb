def fibonacci_generator(x0, y0)
  Fiber.new do
    x = x0
    y = y0
    loop do
      Fiber.yield y
      x, y = y, x + y
    end
  end
end

g = fibonacci_generator(0, 1)

10.times { print g.resume, ' ' }
