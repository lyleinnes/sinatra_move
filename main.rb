
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :lunch
end

get '/sixpm' do
  erb :sixpm
end

get '/special-event' do
  erb :comedyfest
end

get '/mockup' do
  erb :mockup
end
