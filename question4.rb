#A palindromic number reads the same both ways. 
#The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

#Find the largest palindrome made from the product of two 3-digit numbers.

def palFinder()
	a = (100..999).to_a
	b = (100..999).to_a
	palindromes = []

	a.each do |i|
		b.each do |x|
			product = x*i
			if product.to_s == product.to_s.reverse
				palindromes.push product
			end
		end
	end
	palindromes.sort!
	largestPalindrome = palindromes.pop
	return largestPalindrome
end

puts palFinder