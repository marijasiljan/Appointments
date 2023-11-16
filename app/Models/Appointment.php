<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Appointment extends Model
{
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->status = $this->status ?? 1;
    }

    public function employee() : BelongsTo
    {
        return $this->belongsTo(User::class, 'employee_id')->where('role', 'admin');
    }

    public function client() : BelongsTo
    {
        return $this->belongsTo(User::class, 'client_id')->where('role', 'client');
    }

    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }

    use HasFactory;
}
