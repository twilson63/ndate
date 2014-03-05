# ndate

A nodeos syscall similar to the POSIX date call ndate can return a formatted version of the system date, or it can also take a `-d` option followed by a STRING and return the specified date in a particular format:

```
ndate -d 1/1/80 MMMM-dd-YYYY
```

## usage

```
ndate
#=>
```

``` 
ndate -d 9/9/09
```

## install

```
npkg install ndate
```

## LICENSE

MIT
 
