def levenshtein_distance(first, second)
  first_size = first.length
  second_size = second.length
  return second_size if first_size.zero?
  return first_size if second_size.zero?

  max = first_size / 2
  return first_size if (first_size - second_size).abs > max

  d = (0..second_size).to_a
  result = nil

  first.each_char.with_index do |char_first, i|
    next_index = i + 1

    second.each_char.with_index do |char_second, j|
      cost = char_first == char_second ? 0 : 1
      result = [d[j + 1] + 1, # insertion
                next_index + 1, # deletion
                d[j] + cost # substitution
                ].min
      d[j] = next_index
      next_index = result
    end

    d[second_size] = result
  end

  result
end

%w[kitten sitting saturday sunday rosettacode raisethysword Saadam sadam apple aple match match].each_slice(2) do |a, b|
  puts "distance(#{a}, #{b}) = #{levenshtein_distance(a, b)}"
end
