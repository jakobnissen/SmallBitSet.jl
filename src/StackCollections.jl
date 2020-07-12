module StackCollections

struct Unsafe end
const unsafe = Unsafe()

abstract type AbstractStackSet <: AbstractSet{Int} end

@static if VERSION >= v"1.4"
    Base.hasfastin(::Type{AbstractStackSet}) = true
end

include("stackvector.jl")
include("digitset.jl")
include("stackset.jl")
include("onehotvector.jl")

export StackVector, DigitSet, StackSet, setindex, push, pop, delete,
       complement, isdisjoint, OneHotVector, reverse

end
