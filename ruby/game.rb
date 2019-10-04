puts 'Hello! This is Get My Number game.'
print 'Enter your name: '
input = gets
name = input.chomp
print "Welcome, #{name}!"

ATTEMPTS = 10
puts "I've got a random number between 1 and 100."
puts 'Can you guess it?'
target = rand(1..100)

guessed_it = false
num_guesses = 0

while num_guesses < ATTEMPTS && guessed_it == false
  puts "You have got #{ATTEMPTS - num_guesses} guesses left."

  print 'Make a guess: '
  guess = gets.to_i
  num_guesses += 1
  if guess < target
    puts 'Oops. Your guess was LOW.'
  elsif guess > target
    puts 'Oops. Your guess was HIGH.'
  elsif guess == target
    puts "Good job, #{name}!"
    puts "You guessed my number in #{num_guesses} guesses!"
    guessed_it = true
  end
end

puts "Sorry. You didn't get my number. It was #{target}" unless guessed_it
