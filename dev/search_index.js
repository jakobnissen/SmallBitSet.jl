var documenterSearchIndex = {"docs":
[{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [StackCollections]","category":"page"},{"location":"reference/#StackCollections.DigitSet","page":"Reference","title":"StackCollections.DigitSet","text":"DigitSet([itr])\n\nConstruct a DigitSet, an AbstractSet{Int} which can only contains numbers 0:63. A DigitSet is stored as a single integer in memory, and is immutable.\n\nSee also: StackSet\n\n\n\n\n\n","category":"type"},{"location":"reference/#StackCollections.OneHotVector","page":"Reference","title":"StackCollections.OneHotVector","text":"OneHotVector([itr])\n\nConstuct a OneHotVector, an AbstractVector{Bool} containing exactly one true, and all other values false. The vector is stored in memory as two integers and is immutable.\n\n\n\n\n\n","category":"type"},{"location":"reference/#StackCollections.StackSet","page":"Reference","title":"StackCollections.StackSet","text":"StackSet([itr])\n\nConstruct a StackSet, an AbstractSet{Int} which can only contains numbers N:N+63. A Stackset is stored in memory as a DigitSet and an integer offset, and is immutable\n\nSee also: StackSet\n\n\n\n\n\n","category":"type"},{"location":"reference/#StackCollections.StackVector","page":"Reference","title":"StackCollections.StackVector","text":"StackVector{L}([itr])\n\nConstruct a StackVector containing L Bool values. A StackVector is stored as an integer in memory and is immutable.\n\n\n\n\n\n","category":"type"},{"location":"reference/#StackCollections.delete","page":"Reference","title":"StackCollections.delete","text":"delete(s::AbstractStackSet, v::Int)\n\nReturn a copy of s that does not contain without v.\n\nExamples\n\njulia> s = DigitSet([4, 41, 9]);\n\njulia> delete(s, 1)\nDigitSet with 3 elements:\n  4\n  9\n  41\n\nSee also: pop\n\n\n\n\n\n","category":"function"},{"location":"reference/#StackCollections.isdisjoint","page":"Reference","title":"StackCollections.isdisjoint","text":"isdisjoint(x, y) -> Bool\n\nCheck if x and y have no elements in common.\n\nExamples\n\njulia> isdisjoint(DigitSet([1,6,4]), DigitSet([0, 61, 44]))\ntrue\n\njulia> isdisjoint(DigitSet([1,6,4]), DigitSet([4, 61, 44]))\nfalse\n\njulia> isdisjoint(DigitSet(), DigitSet())\ntrue\n\n\n\n\n\n","category":"function"},{"location":"reference/#StackCollections.pop","page":"Reference","title":"StackCollections.pop","text":"pop(s::AbstractStackSet, v::Int)\n\nReturn a copy of s without v. If v is not in s, raise an error.\n\nExamples\n\njulia> s = DigitSet([4, 41, 9]);\n\njulia> pop(s, 41)\nDigitSet with 2 elements:\n  4\n  9\n\nSee also: delete\n\n\n\n\n\n","category":"function"},{"location":"reference/#StackCollections.push","page":"Reference","title":"StackCollections.push","text":"push(collection, items...)\n\nReturn a new collection containing all elements of collection and of items.\n\nExamples\n\njulia> s = DigitSet([4, 9]);\n\njulia> push(s, 1, 11)\nDigitSet with 4 elements:\n  1\n  4\n  9\n  11\n\n\n\n\n\n","category":"function"},{"location":"reference/#StackCollections.setindex-Tuple{StackVector,Bool,Int64}","page":"Reference","title":"StackCollections.setindex","text":"setindex(collection, v, i::Int)\n\nReturn a copy of collection with the value at index i set to v.\n\nExamples\n\njulia> x = StackVector([true, false])\n2-element StackVector{2}:\n 1\n 0\n\njulia> setindex(x, false, 1)\n2-element StackVector{2}:\n 0\n 0\n\n\n\n\n\n","category":"method"},{"location":"#StackCollections.jl","page":"Home","title":"StackCollections.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Fixed-bit collections in Julia","category":"page"},{"location":"","page":"Home","title":"Home","text":"This package implements a few collection types that can be stored in one or a few machine integers:","category":"page"},{"location":"","page":"Home","title":"Home","text":"DigitSet: A set of integers 0:63\nStackSet: A set of integers N:N+63\nStackVector{L}: A boolean vector with a length L of up to 64.\nOneHotVector: A boolean vector with exactly one value true, rest false.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The main features of the types are:","category":"page"},{"location":"","page":"Home","title":"Home","text":"They are simple to use, implements the basic methods from Base you would expect such as union for sets and reverse for vectors:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> a = StackVector([true, true, false, true]); reverse(a)\n4-element StackVector{4}:\n 1\n 0\n 1\n 1","category":"page"},{"location":"","page":"Home","title":"Home","text":"They are safe by default, and throws informative error messages if you attempt illegal or undefined operations.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> push(DigitSet(), 100)\nERROR: ArgumentError: DigitSet can only contain 0:63","category":"page"},{"location":"","page":"Home","title":"Home","text":"All types are immutable and so easier to reason about. Base methods that usually end with an exclamation mark such as push! instead must use push.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> push!(DigitSet(), 100)\nERROR: MethodError: no method matching push!(::DigitSet, ::Int64)","category":"page"},{"location":"","page":"Home","title":"Home","text":"They are highly efficiently implemented, with most methods meticulously crafted for maximal performance.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> f(x, y) = length(setdiff(x, symdiff(x, y)));\n\njulia> code_native(f, (DigitSet, DigitSet), debuginfo=:none)\n    .section    __TEXT,__text,regular,pure_instructions\n    movq    (%rsi), %rax\n    andq    (%rdi), %rax\n    popcntq %rax, %rax\n    retq\n    nopl    (%rax)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Stack collections can be instantiated from an iterable, for example StackVector([true, false, true]), but this is not optimally efficient. Alternatively, they can be directly constructed using the unexported StackCollections.unsafe trait. But be careful: The trait is called unsafe for a reason - when constructed this way, there is no checking the inputs.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> StackVector{3}(UInt(5), StackCollections.unsafe)\n3-element StackVector{3}:\n 1\n 0\n 1","category":"page"},{"location":"","page":"Home","title":"Home","text":"This API follows SemVer 2.0.0. The API for this package is defined by the documentation.","category":"page"}]
}
