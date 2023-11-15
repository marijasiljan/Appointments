<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Availability extends Model
{
    protected $table = 'availability';

    protected $fillable = [
        'date',
        'days',
        'hours',
        'status',
        'affiliate_id',
        'employee_id',
    ];

    public function employee() : BelongsTo
    {
        return $this->belongsTo(User::class, 'employee_id')->where('role', 'admin');
    }

    public function affiliate(): BelongsTo
    {
        return $this->belongsTo(Affiliate::class, 'affiliate_id');
    }

    use HasFactory;
}
