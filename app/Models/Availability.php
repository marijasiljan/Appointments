<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Availability extends Model
{
    protected $table = 'price';

    protected $fillable = [
        'date',
        'day',
        'start_time',
        'end_time',
        'status',
        'affiliate_id',
        'employee_id',
    ];

    public function employee()
    {
        return $this->belongsTo(User::class, 'admin_id')->where('role', 'admin');
    }

    public function affiliate()
    {
        return $this->belongsTo(Affiliate::class, 'affiliate_id');
    }

    use HasFactory;
}
