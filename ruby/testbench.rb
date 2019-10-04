require 'benchmark'

time = Benchmark.measure do
  5_000_000.times do |_i|
    %w[yahoo google yandex].collect(&:upcase)
  end
end
puts time

time = Benchmark.measure do
  5_000_000.times do |_i|
    %w[yahoo google yandex].collect(&:upcase)
  end
end
puts time
